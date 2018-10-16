import React from "react";
import HostList from "./HostList";

const Area = props => {
  const getHosts = () => {
    return props.hosts.filter(host => {
      return host.area === props.name;
    });
  };
  return (
    <div style={props.style} className="area">
      <h3>{props.name}</h3>
      <HostList
        hosts={getHosts()}
        handleClick={props.handleClick}
        handleToggle={this.handleToggle}
        handleAreaChange={this.handleAreaChange}
      />
    </div>
  );
};

export default Area;
