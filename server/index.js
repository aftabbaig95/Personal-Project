require('dotenv').config(); 
const express = require('express'); 
const {json} = require('body-parser'); 
const app = express(); 
const massive = require('massive'); 
const port = 3001; 
const ListingCtrl = require('./Controllers/ListingCtrl'); 
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');
// const students = require('./students.json');




//This is our Database Connections
massive( process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db)
})
.catch(error => console.log('ERROR: ', error))


//these are the MIDDLEWARES we will use
app.use(json()); 
app.use( session({
    secret: '@nyth!ng y0u w@nT',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 10000000000000}

  }));
  
  app.use( passport.initialize() );
  app.use( passport.session() );
  passport.use( new Auth0Strategy({
    domain:       process.env.DOMAIN,
    clientID:     process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:  '/callback',
    scope: "openid email profile"
   },
   function(accessToken, refreshToken, extraParams, profile, done) {
     // accessToken is the token to call Auth0 API (not needed in the most cases)
     // extraParams.id_token has the JSON Web Token
     // profile has all the information from the user
     return done(null, profile);
   }
  ) );
  
  passport.serializeUser( (user, done) => {
      const db = app.get('db')
    //   const db = req.app.get('db'); 
    // console.log(user); 
      db.get_user(user.id).then(response => {
        console.log(response)
        if(!response[0]){
            db.add_user([user.nickname, user.id ])
            .then(res => done(null, res[0]))
            .catch((err) => console.log(err))
        } 
        else return done(null, response[0]);         
          
    }).catch((err) => console.log(err));
    });
  
  passport.deserializeUser( (user, done) => {
    done(null, user);
  });
  
  app.get('/login', passport.authenticate('auth0'))

  app.get( '/callback',
    passport.authenticate('auth0',
      { successRedirect: 'http://localhost:3000/#/home', failureRedirect: 'http://localhost:3001/', connection: 'github' }
    )
  );
  
  app.get( '/logout', (req, res) => {
      req.session.destroy(() => res.redirect("http://localhost:3000/#/"))
    }
  )

  app.get('/authenticated',(req, res, next)=> {
    if( req.user ) {
      next();
    return res.status(200).send(req.user)
    } else {
    return res.sendStatus(401);
    }
  })
  
//   app.get('/students', authenticated, ( req, res, next ) => {
//     res.status(200).send(students)
//   });




  //ENDPOINTS
app.get('/api/listings', ListingCtrl.getListings);
app.get('/api/images/:id', ListingCtrl.getImages);

app.listen(port, () => console.log(`listening on port: ${port}`))