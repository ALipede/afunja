import React, { Component } from 'react';

import './../../assets/scss/index.scss'
 
class LinkFireWidget extends Component {
  render () {
    return (
          <div className="widgetFrame">
            <iframe 
              data-lnk-widget
              src={this.props.src} 
              id={this.props.id} 
              height={this.props.height}
              width={this.props.width} 
              frameBorder="0"
              className="linkFire"
              />
          </div>
    
    );

  }
}

export default LinkFireWidget;