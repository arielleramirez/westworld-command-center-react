import React from "react";
import { Grid } from "semantic-ui-react";
import ColdStorage from "./ColdStorage";
import HostInfo from "./HostInfo";

const Headquarters = props => {
  let newArea = props.areas.map(area => {
    return { key: area.name, text: area.name, value: area.name };
  });

  // debugger;

  return (
    <Grid celled="internally">
      <Grid.Column width={10}>
        {<ColdStorage hosts={props.hosts} handleClick={props.handleClick} />}
      </Grid.Column>
      <Grid.Column width={5}>
        {
          <HostInfo
            hostInfo={props.hostInfo}
            areas={newArea}
            handleToggle={props.handleToggle}
            handleAreaChange={props.handleAreaChange}
          />
        }
      </Grid.Column>
    </Grid>
  );
};

export default Headquarters;
