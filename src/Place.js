//Individual place
import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

class Place extends Component {
  zoom() {
    const app = this.props.app;
    const map = app.state.map;
    map.flyTo({
      center: [this.props.place.long, this.props.place.lat],
      zoom: 20,
    });
  }

  render() {
    const app = this.props.app;
    const map = app.state.map;
    //const place = this.props.place
    if (map) {
      const marker = new mapboxgl.Marker({ color: "2727e6" });
      marker.setLngLat([this.props.place.long, this.props.place.lat]);
      marker.addTo(map);
    }

    return (
      <div className="place" onClick={() => this.zoom()}>
        {" "}
        {this.props.place.name}
      </div>
    );
  }
}

export default Place;
