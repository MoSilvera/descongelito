import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import raidLocationManager from "../../modules/resourceManager/raidLocationManager"
import Loading from "./Loading"
const mapStyles = {
  width: '100%',
  height: '90%',


}
export class MapContainer extends Component {

  state = {
    raidLocations: [],
    userLocation: { lat: 32, lng: 32 }, loading: true
}

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
    raidLocationManager.GETALL()
      .then((raidLocations) => this.setState({
        raidLocations: raidLocations
      }))
  }

  render() {


      const { loading, userLocation } = this.state;


      if (loading) {

        return <Loading />
      }


    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={userLocation}>

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