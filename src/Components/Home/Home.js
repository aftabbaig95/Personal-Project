import React, { Component } from 'react'
import axios from 'axios'; 
import Background from '../Background/Background'; 
import Icon from 'react-fa';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Home.css';
import Cards from '../Cards/Cards'; 
import Header from '../Header/Header'; 
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import "./Home.css"

import {getFeatured} from '../../ducks/propertyReducer';

 class Home extends Component {
  
    
  componentDidMount(){ 
   this.props.getFeatured();
  }  
  render() {
    // console.log(this.props)
    let list = this.props.properties.featured.map((home, id) => {
    
    return (
    <div className="featured-cards">
   <Link to={`/Property/${home.id}`} ><Cards home={home}/> </Link>
   </div>
  )})
    return (
    <div>

        <Header/>
        <Background/>
        <div className="Background">
          <div className="carousel-input"> 
            {/* <input type="text" placeholder="Have you been to Dallas..." className="search"></input>  */}
          </div>
          {/* <Background className="carousel"/> */}
        </div>
        <h1 className="featured-text">Featured Listings</h1>
        <h2 className="featured-listings">Dallas Locations</h2>
        <div className="cards-container">
        {list} 
        
        </div>
        <h2 className="featured-listings">Houston Locations</h2>
        <div className="cards-container">
        
        
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps, {getFeatured})(Home)
