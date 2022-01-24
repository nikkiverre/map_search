import React, { Component } from "react";
import "./StyleChanger.css";

class StyleChanger extends Component {
  changeStyle(url) {
    this.props.app.setState({ style: url });
  }
  render() {
    const styles = [
      { name: "Light", url: "mapbox://styles/mapbox/light-v10" },
      { name: "Dark", url: "mapbox://styles/mapbox/dark-v10" },
      { name: "Outdoors", url: "mapbox://styles/mapbox/outdoors-v11" },
    ];

    const buttons = styles.map((style, index) => {
      let className = "";
      if (style.url === this.props.app.state.style) {
        className = "selected";
      }
      return (
        <button
          className={className}
          key={index}
          onClick={() => this.changeStyle(style.url)}
        >
          {style.name}
        </button>
      );
    });

    return <div className="styleChanger">{buttons}</div>;
  }
}

export default StyleChanger;
