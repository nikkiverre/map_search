import React, { Component } from "react";
import "./SearchMap.css";

class SearchMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isLoading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const accessToken =
      "pk.eyJ1Ijoibmlra2lib29za2kiLCJhIjoiY2t5c3R6a3owMDBvcDJucnplejRycmloYiJ9.lN5At34lcedxkIG8nYKGhw";

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const oldPlaces = this.props.app.state.places;
        const firstResult = data.features[0];
        oldPlaces.push({
          name: this.state.value,
          lat: firstResult.center[1],
          long: firstResult.center[0],
        });
        this.props.app.setState({ places: oldPlaces });
        this.setState({ value: "" });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search for a place"
        />
      </form>
    );
  }
}

export default SearchMap;
