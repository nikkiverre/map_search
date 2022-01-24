import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
//this file imports the mapbox sdk

class Map extends Component {
  componentDidMount() {
    const app = this.props.app; //this props that's being passed in from app.js with app={this}
    mapboxgl.accessToken =
      "pk.eyJ1Ijoibmlra2lib29za2kiLCJhIjoiY2t5c3R6a3owMDBvcDJucnplejRycmloYiJ9.lN5At34lcedxkIG8nYKGhw";
    const map = new mapboxgl.Map({
      container: "map", //element id
      style: app.state.style,
      center: [app.state.long, app.state.lat],
      zoom: 13,
    });

    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(navigationControl);

    this.props.app.setState({ map: map });
  }

  render() {
    const map = this.props.app.state.map;
    if (map) {
      map.setStyle(this.props.app.state.style);
    }

    return <div id="map"></div>;
  }
}

export default Map;
