import React from "react";
import { Menu, Dropdown, Header, Container } from "semantic-ui-react";

class NavBar extends React.Component
{
  render()
  {
    return (
        <div className="navbar" style={{ marginBottom: "50px" }}>
          <Menu borderless className="navbar" style={{ position: "relative" }}>
            <Menu.Item className="navbar-item-color" style={{ fontSize: "16px" }}>
              About
            </Menu.Item>
            <Menu.Item className="navbar-ezxc">
              <Header as="h2" className="navbar-item-color">EZXC</Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown icon="" floating text="Dave Alonzo" className="navbar-item-color">
                <Dropdown.Menu>
                  <Dropdown.Item>Edit Account</Dropdown.Item>
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}

export default NavBar;
