import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

const HostList = props => {
  if (!props.hosts) {
    return <h1>looks like nothing to me</h1>;
  }
  return (
    <Card.Group itemsPerRow={6}>
      {props.hosts.map(host => {
        return (
          <Host
            key={host.firstName}
            host={host}
            handleClick={props.handleClick}
          />
        );
      })}
    </Card.Group>
  );
};

export default HostList;
