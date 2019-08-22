import React from "react";
import { Menu, Dropdown, Header } from "semantic-ui-react";
import { withRouter, NavLink } from 'react-router-dom';

class NavBar extends React.Component
{
  render()
  {
    return (
        <div className="navbar" style={{ marginBottom: "50px" }}>
          <Menu className="navbar" borderless style={{ position: "relative" }}>
            <Menu.Item className="navbar-item-color" style={{ fontSize: "16px" }}>About</Menu.Item>
            <Menu.Item style={{ position: "absolute", left: "47%" }} as={NavLink} activeClassName="" exact to="/">
              <Header as="h2" className="navbar-item-color">EZXC</Header>
            </Menu.Item>

            <Menu.Item position="right">

              {this.props.currentUser === '' ? (
                  <Dropdown text="Login" pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                      <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
                    </Dropdown.Menu>
                  </Dropdown>
              ) : (
                  <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
                    <Dropdown.Menu>
                      <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
                    </Dropdown.Menu>
                  </Dropdown>
              )}
            </Menu.Item>

            {/*<Menu.Item position="right">*/}
              {/*<Dropdown icon="" floating text="Dave Alonzo" className="navbar-item-color">*/}
                {/*<Dropdown.Menu>*/}
                  {/*<Dropdown.Item>Edit Account</Dropdown.Item>*/}
                  {/*<Dropdown.Item>Log Out</Dropdown.Item>*/}
                {/*</Dropdown.Menu>*/}
              {/*</Dropdown>*/}
            {/*</Menu.Item>*/}

            {/*<Menu.Item position="right">*/}

              {/*{this.props.currentUser === '' ? (*/}
                  {/*<Dropdown text="Login" pointing="top right" icon={'user'}>*/}
                    {/*<Dropdown.Menu>*/}
                      {/*<Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>*/}
                      {/*<Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>*/}
                    {/*</Dropdown.Menu>*/}
                  {/*</Dropdown>*/}
              {/*) : (*/}
                  {/*<Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>*/}
                    {/*<Dropdown.Menu>*/}
                      {/*<Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>*/}
                    {/*</Dropdown.Menu>*/}
                  {/*</Dropdown>*/}
              {/*)}*/}
            {/*</Menu.Item>*/}
          </Menu>
        </div>
    );
  }
}

export default NavBar;
