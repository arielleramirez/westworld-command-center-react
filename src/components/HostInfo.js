import React, { Component } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  List,
  Segment,
  Divider
} from "semantic-ui-react";

class HostInfo extends Component {
  state = {
    checked: false,
    value: this.props.hostInfo.area,
    areas: this.props.areas
    // This state is here to show you how the Info box should work. But it doesn't have to (and probably shouldn't) live here
    // Plus the areas aren't called area1,2,or 3. That's just a placeholder.
  };

  handleChange = e => {};

  toggle = () => {
    // Your code here
  };

  render() {
    // const { value, areas } = this.state;
    // A lot of these values are hardcoded.....but they shouldn't be, hint hint....

    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image
              floated="left"
              size="small"
              src={this.props.hostInfo.imageUrl}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  {this.props.hostInfo.firstName +
                    " " +
                    this.props.hostInfo.lastName}
                  <Icon
                    name={
                      this.props.hostInfo.gender === "Male" ? "man" : "woman"
                    }
                  />
                </Card.Header>
                <Card.Meta>
                  <Radio
                    style={{ margin: "10px" }}
                    slider
                    onChange={this.props.handleToggle}
                    label={
                      this.props.hostInfo.active ? "Active" : "Decommissioned"
                    }
                    checked={this.props.hostInfo.active}
                  />
                </Card.Meta>
                <Divider />
                Current Area:
                <Dropdown
                  onChange={event => {
                    this.props.handleAreaChange(event, event.target.innerText);
                  }}
                  value={this.state.value}
                  selection
                  options={this.props.areas}
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default HostInfo;
