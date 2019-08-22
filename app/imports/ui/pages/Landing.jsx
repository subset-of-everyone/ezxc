import React from "react";
import { Header, Divider, Button, Menu} from "semantic-ui-react";
import { withRouter, NavLink } from 'react-router-dom';

class Landing extends React.Component
{
  render()
  {
    return (
      <div className="landing">
        <Menu.Item as={NavLink} activeClassName="" exact to="/"/>
        <Header as="h1" style={{ fontSize: "44px" }}>Welcome to EZXC!</Header>
        <Divider />
        <Header as="h4" textAlign="right" style={{ fontWeight: "normal" }}>Sign in <a>here</a> to start.</Header>
        <Button as={NavLink} exact to="/signup_student"> Student </Button>
        <Button as={NavLink} exact to="/signup_instructor"> Instructor </Button>
      </div>


    );
  }
}

export default Landing;
