import React, { Component } from "react";
import "./Places.css";
import Place from "./Place";

class Places extends Component {
  render() {
    const places = this.props.app.state.places;

    let placeItems = <div className="no-results">No Places Yet</div>;
    if (places.length > 0) {
      placeItems = places.map((place) => {
        return <Place place={place} app={this.props.app}></Place>;
      });
    }

    return <div className="places">{placeItems}</div>;
  }
}
export default Places;
