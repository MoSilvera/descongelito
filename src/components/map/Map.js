import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
 
};


export class MapContainer extends Component {

  render() {
   
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
         lat: 36.1627,
         lng: -86.7816,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAAAsfzkVnEe5EqMSr_2tvuVUp8mQl9yfM'
})(MapContainer);