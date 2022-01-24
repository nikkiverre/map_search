import React, { Component } from "react";
import Map from "./Map";
import "./App.css";
import StyleChanger from "./StyleChanger.js";
import SearchMap from "./SearchMap";
import Places from "./Places";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      lat: 40.7828,
      long: -73.9682,
      style: "mapbox://styles/mapbox/streets-v11",
      places: [], //{ name: "Central Park", lat: 40.7828, long: -73.9682 }],
    };
  }

  render() {
    return (
      <div className="App">
        <SearchMap app={this}> </SearchMap>
        <StyleChanger app={this}></StyleChanger>
        <Places app={this}></Places>
        <Map app={this}></Map>
      </div>
    );
  }
}

export default App;
