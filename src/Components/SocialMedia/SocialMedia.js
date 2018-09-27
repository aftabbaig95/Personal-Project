import React, { Component } from 'react'
import './SocialMedia.css'; 

export default class SocialMedia extends Component {
    render() {
        // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    return (
    <div>
        <div class="text">
        <a class="twitter" href="http://localhost:3000" target="_blank">@Rec&Res</a>
      </div>
      <div class="float-sm">
        <div class="fl-fl float-fb">
          <i class="fa fa-facebook"></i>
          <a href="" target="_blank"> Like us!</a>
        </div>
        <div class="fl-fl float-tw">
          <i class="fa fa-twitter"></i>
          <a href="" target="_blank">Follow us!</a>
        </div>
        <div class="fl-fl float-gp">
          <i class="fa fa-google-plus"></i>
          <a href="" target="_blank">Recommend us!</a>
        </div>
        <div class="fl-fl float-rs">
          <i class="fa fa-rss"></i>
          <a href="" target="_blank">Follow via RSS</a>
        </div>
        <div class="fl-fl float-ig">
          <i class="fa fa-instagram"></i>
          <a href="" target="_blank">Follow us!</a>
        </div>
        <div class="fl-fl float-pn">
          <i class="fa fa-pinterest"></i>
          <a href="" target="_blank">Follow us!</a>
        </div>
      </div>
    </div> 
    )
  }
}





