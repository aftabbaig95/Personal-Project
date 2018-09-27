module.exports = {
    getListings: (req, res, next) => { 
        const db = req.app.get('db'); 

        db.GET_LISTINGS().then(listings => {
            // console.log('listings: ', listings);
            
            res.status(200).send(listings)}) 

    },
    getListing: (req, res, next) => { 
        const db= req.app.get('db'); 

        db.GET_LISTING(req.params.id).then(listing => res.status(200).send(listing))
    },
    getImages: (req, res, next) => { 
        const db= req.app.get('db'); 

        db.GET_IMAGES(req.params.id).then(images => res.status(200).send(images))
    }
}




