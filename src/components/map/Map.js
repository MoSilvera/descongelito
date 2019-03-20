import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import raidLocationManager from "../../modules/resourceManager/raidLocationManager"

const mapStyles = {
  width: '99%',
  height: '80%',
  

}
export class MapContainer extends Component {

  state = {
    raidLocations: []
}

  componentDidMount() {
    raidLocationManager.GETALL()
      .then((raidLocations) => this.setState({
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
              key={location.id}
              name={"Raid Occurance"}
              position={{ lat: location.lat, lng: location.long }}
            />

          }))
        }

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAAAsfzkVnEe5EqMSr_2tvuVUp8mQl9yfM'
})(MapContainer);