import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let newOpacity = this.props.opacity
    if(newOpacity >= 0.2){
    return (
      <div className="color-box" style={{opacity: newOpacity}}>
        {<ColorBox opacity={newOpacity - 0.1}></ColorBox>}
      </div>
    )
    }
    else{
      return null
    }
  }

}

