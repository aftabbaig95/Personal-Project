// import React from 'react'; 
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { Component } from 'react';
import Icon from 'react-fa';
import './Background.css'

export default class Background extends Component {

  render() {
    return (
      
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
        <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F174f36a7-8186-4db4-aaa2-11b6f6b11832.jpg?alt=media&token=a2e8dd6a-178e-4ce4-ba32-8209f2eeed0b" />
        <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F91d67209_original.jpg?alt=media&token=7b2d8887-f5ca-47a4-ab7f-9b2b4e38090d" />
        <img className="transition-image" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F5acc860d_original.jpg?alt=media&token=ee47e94d-ca0c-4000-963b-0c98636b78ff" />
      </Carousel>
      
    );
  }
}




  // render() {
  //   return (
  //     <Carousel
  //       slidesPerPage={1}
  //       slidesPerScroll={1}
  //       animationSpeed={10}
  //       autoPlay={2000}
  //       // stopAutoPlayOnHover
  //       offset={0}
  //       itemWidth={1000}
  //       // clickToChange
  //       centered
  //     >
  //       <img src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F91d67209_original.jpg?alt=media&token=7b2d8887-f5ca-47a4-ab7f-9b2b4e38090d" />
        
  //       <img src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F91d67209_original.jpg?alt=media&token=7b2d8887-f5ca-47a4-ab7f-9b2b4e38090d" />
        
  //       <img src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dashboard%20images%2F5acc860d_original.jpg?alt=media&token=ee47e94d-ca0c-4000-963b-0c98636b78ff" />
  //     </Carousel>
  //   );
  // }