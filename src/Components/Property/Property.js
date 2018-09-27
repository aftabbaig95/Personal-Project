import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Property extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.match.params.id}

      </div>
    )
  }
}
