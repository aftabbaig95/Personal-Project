import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { Component } from 'react';
import Icon from 'react-fa';
import axios from 'axios'; 
import StarRatings from 'react-star-ratings'; 

 
export default class Cards extends Component {
    constructor(){
        super();

        this.state= {
            images: []
        }
    }
    componentDidMount(){
        axios.get(`api/images/${this.props.home.id}`)
        .then(res => 
        {   
            
            let picture = res.data.map(e => e.image )
            this.setState({images:picture})
            console.log(this.state.images)

        })     
    }
  render() {
    const {home} = this.props
    return (
    <div className="featured-info" key={home.id}>
    
       {/* <div className="featured-image">
            <Carousel
            infinite>
            <img className="img-example" src={home.image} />
            </Carousel>
        </div>  */}
        <img  className="featured-image" src={this.state.images[0]}/>
        {/* <img  className="featured-image" src={this.state.images[1]}/> */}

        <br/>
        <div className="featured-list">
        <ul >
            {home.city}<br/>
            {home.type}<br/>
            {home.address}<br/>
            {`$${home.price} Per Night`} <br/>
            <StarRatings
                  rating={home.rating}
                  starRatedColor="Gold"
                  numberOfStars={5}
                  starDimension="13px"
                />
            {/* {home.rating}<br/> */}
        </ul>
        </div>
    </div>
    )
}
}

// {/* <div className="Carousel">

{/* <img className="img-example" src="https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o/Dallas1.2.jpg?alt=media&token=adf8e6af-ea11-48ea-af25-53e16b0894de" /> */}