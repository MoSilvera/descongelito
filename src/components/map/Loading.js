import React, { Component } from 'react';
import "./map.css"

export default class MapContainer extends Component {
    render() {

        return (
        <React.Fragment>
           <div className="thermometerContainer">
           <div className="thermometer"></div>
           <h2>Loading Map</h2>
           </div>
        </React.Fragment>
          
        )
    }
}