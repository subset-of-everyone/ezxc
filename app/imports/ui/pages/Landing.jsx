import React from "react";
import { Header, Divider } from "semantic-ui-react";

export default class Landing extends React.Component
{
  render()
  {
    return (
      <div className="landing">
        <Header as="h1" style={{ fontSize: "44px" }}>Welcome to EZXC!</Header>
        <Divider />
        <Header as="h4" textAlign="right" style={{ fontWeight: "normal" }}>Sign in <a>here</a> to start.</Header>
      </div>
    );
  }
}
