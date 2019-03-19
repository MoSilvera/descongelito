import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import raidLocationManager from "../../modules/resourceManager/raidLocationManager"

const mapStyles = {
  width: '100%',
  height: '100%',

};
// let markers = () => {
//     var marker, i;
//     raidLocationManager.GETALL()
//     .then((locations)=> {for (i = 0; i < locations.length; i++) {
//       marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations.lat, locations.long),
//         map: Map
//       })
//       (marker, i)}}) }



export class MapContainer extends Component {

  state={
    raidLocations: []
  }

  componentDidMount (){
    raidLocationManager.GETALL()
    .then((raidLocations)=>this.setState({
        raidLocations: raidLocations
    }))
  }

  render() {




    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 36.1627,
          lng: -86.7816,

        }}>

       {
         this.state.raidLocations.map((location => { 
         
          return <Marker
          name={"Raid Occurance"}
          position={{lat:location.lat, lng:location.long}}
           />
          
           }))
           }

        {/* <Marker
          name={"Raid Occurance"}
          position={{ lat: 36.1627, lng: -86.7816 }}
        /> */}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAAAsfzkVnEe5EqMSr_2tvuVUp8mQl9yfM'
})(MapContainer);