import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Host extends Component {
  // state = {
  //   clicked: false
  //   // This is here for demonstration. But should it live here?
  //   // Consider the fact that we want to make sure you can't select more than one Host at a time
  // };

  // handleClick = e => {
  //   this.setState({ clicked: !this.state.clicked });
  // };

  render() {
    // let style = this.state.clicked
    //   ? { width: "50px", border: "2px solid red", borderRadius: "5px" }
    //   : { width: "50px" };

    return (
      <Card
        onClick={event => this.props.handleClick(this.props.host)}
        style={{ width: "50px" }}
        raised
        image={this.props.host.imageUrl}
      />
    );
  }
}

export default Host;
