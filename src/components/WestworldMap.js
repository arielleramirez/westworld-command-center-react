import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

class WestworldMap extends Component {
  render() {
    return (
      <Segment id="map">
        {this.props.areas.map(area => {
          return (
            <Area
              key={area.name}
              name={area.name}
              style={area.style}
              hosts={this.props.hosts}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </Segment>
    );
  }
}

export default WestworldMap;
