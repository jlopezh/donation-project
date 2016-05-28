import React, { Component, PropTypes } from 'react';
import Loader from './Loader';

class Map extends Component {
  componentDidMount() {
  }

  onBannerClick(evt){
    alert("Click Me");
  }

  render(){
    // Render the div with an onClick prop (value is a function)
    return <div id="viewDiv" onClick={this.onBannerClick}>ESRI MAP</div>;
  }
}

export default Map;
