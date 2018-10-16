import React, { Component, Fragment } from "react";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import HostList from "./components/HostList";
import Headquarters from "./components/Headquarters";

class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHost: {}
  };

  fetchHosts = () => {
    fetch("http://localhost:3001/hosts")
      .then(response => response.json())
      .then(hostData => {
        this.setState({
          hosts: hostData
        });
      });
  };

  fetchAreas = () => {
    fetch("http://localhost:3001/areas")
      .then(response => response.json())
      .then(areaData => {
        this.setState({
          areas: areaData
        });
      });
  };

  componentDidMount() {
    this.fetchHosts();
    this.fetchAreas();
  }

  handleClick = hostObj => {
    //console.log("this is before set state", hostObj, this.state.selectedHost);
    this.setState({
      selectedHost: hostObj
    });
  };

  getInActiveHosts = () => {
    return this.state.hosts.filter(host => {
      return !host.active;
    });
  };

  getActiveHosts = () => {
    return this.state.hosts.filter(host => {
      return host.active;
    });
  };

  handleToggle = () => {
    // here we're creating a new variable that is equal to every host that is not equal to the one that's been selected & is being toggled
    let alteredHost = this.state.hosts.filter(hostObj => {
      return hostObj.firstName !== this.state.selectedHost.firstName;
    });
    // now, we are creating a copy of the selectedHost using the spread operator so we aren't modifying the original object
    let newHost = { ...this.state.selectedHost };
    // here we are comparing the active attribute of our newly created object to the opposite of the original objects active attribute
    newHost.active = !this.state.selectedHost.active;
    // now we update the state of our hosts attribute by combining the alteredHost & newHost back into the single original object
    this.setState({
      hosts: [...alteredHost, newHost]
    });
  };

  handleAreaChange = (event, newArea) => {
    // Filter out selected host
    let alteredHost = this.state.hosts.filter(hostObj => {
      return hostObj.firstName !== this.state.selectedHost.firstName;
    });

    // Create copy of selected host
    let newHost = { ...this.state.selectedHost };

    // Change selected host copy's area attribute to new area selected in event (from HostInfo)
    newHost.area = newArea;

    // Reset state with new information
    this.setState({
      hosts: [...alteredHost, newHost]
    });
  };

  render() {
    //console.log("this is after set state", this.state.selectedHost);
    return (
      <Segment id="app">
        <WestworldMap
          hosts={this.getActiveHosts()}
          areas={this.state.areas}
          handleClick={this.handleClick}
          handleToggle={this.handleToggle}
          handleAreaChange={this.handleAreaChange}
        />
        <Headquarters
          hosts={this.getInActiveHosts()}
          handleClick={this.handleClick}
          hostInfo={this.state.selectedHost}
          areas={this.state.areas}
          handleToggle={this.handleToggle}
          handleAreaChange={this.handleAreaChange}
        />
      </Segment>
    );
  }
}

export default App;
