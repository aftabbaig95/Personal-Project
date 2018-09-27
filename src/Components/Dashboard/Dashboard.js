import React, { Component } from 'react'
import Icon from 'react-fa';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Background from '../../Components/Background/Background'; 
import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
    <div>
       <a href="http://localhost:3001/login"> <button className="button"  > Login </button> </a>
       <a href="http://localhost:3001/logout"> <button className="button" >Logout </button> </a>
        {/* <Background/> */}
         <Carousel 
        autoPlay={4500}
        slidesPerPage={1}
        slidesPerScroll={1}
        animationSpeed={3}
        infinite
        clickToChange
          centered
          breakpoints={{
            1500: { // these props will be applied when screen width is less than 1000px
              slidesPerPage: 1,
              clickToChange: false,
              centered: true,
              arrows: false,
              infinite: true,
            },
            500: {
              slidesPerPage: 1,
              slidesPerScroll: 1,
              clickToChange: false,
              centered: false,
              arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
              arrowRight: (<Icon className="icon-example" name="arrow-right" />),
              animationSpeed: 2000,
              infinite: true,
            },
          }}
          >
          <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%2Fwallpaper-sunrise-3.jpg?alt=media&token=3eb0247c-5faf-4287-8a35-2d59e1e1f9f0" />
          
          <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%2Fstreets%20rain%20cars%20urban%20buildings%20bokeh%20city%20lights%20tiltshift%20depth%20of%20field%20nighttime%20umbrellas%20bl_www.paperhi.com_9.jpg?alt=media&token=fcebda99-400c-4711-ae30-400fea118f2f" />
          
          <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%2FCanon_aurora-borealis_image2.jpg?alt=media&token=3d00f17d-c6ba-4bfe-a1f6-695448c0698a" />

           <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%2FNight-Time-City-Wallpaper.jpg?alt=media&token=e6c6e312-73f8-4517-8854-3af33cc21d51" />

            <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%2Fsky-aurora-borealis-canada-magnetic-field-skies-nighttime-nature-wallpaper-hd-free.jpg?alt=media&token=d38664ca-c9c1-41af-b972-fc60201a9473" />




        </Carousel> 
    </div> 
        
    )
  }
}
