import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  componentWillMount() {
    // this.state.image = "http://sciencehit.by/"+this.props.image;
    this.setState(
        { 
          image: "http://sciencehit.by/" + this.props.image
        }
      );
  }
  render() {
    return (
      <div className="speaker-info">
        <div className="speaker-avatar"><img src={this.state.image} alt={this.props.children} /></div>
        <div className="speaker-description">
          <div className="name">{this.props.children}</div>
          <div className="area">{this.props.area}</div>
        </div>
      </div>    
      );
  }
}

export default Item;
