import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Grid, Header, Message, Segment } from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";

/**
 * Signup_Student component is similar to signin component, but we attempt to create a new user instead.
 */
export default class Signup extends React.Component
{
  /** Initialize state fields. */
  constructor(props)
  {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      error: "",
      ta: false,
      instructor: false
    };
    // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckedTA = this.handleCheckedTA.bind(this);
    this.handleCheckedIns = this.handleCheckedIns.bind(this);
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange(e, { name, value })
  {
    this.setState({ [name]: value });
  }

  handleCheckedTA () {
    this.setState({ ta: !this.state.ta});
  }

  handleCheckedIns () {
    this.setState({ instructor: !this.state.instructor});
  }

  /** Handle Signup_Student submission using Meteor's account mechanism. */
  handleSubmit()
  {
    const { first_name, last_name, email, password, ta, instructor } = this.state;
    Accounts.createUser({
      first_name,
      last_name,
      email, username: email,
      password,
      ta,
      instructor
    }, (err) =>
    {
      if (err)
      {
        this.setState({ error: err.reason });
      }
      else
      {
        // browserHistory.push('/login');
      }
    });
  }

  /** Display the signup form. */
  render()
  {
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="First Name"
                      icon="user"
                      iconPosition="left"
                      name="first_name"
                      type="first_name"
                      placeholder="First name"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Last Name"
                      icon="lock"
                      iconPosition="left"
                      name="last_name"
                      placeholder="Last name"
                      type="first_name"
                      onChange={this.handleChange}
                  />
                  <label black>Choose your role</label>
                  <Form.Checkbox label = 'TA' name= 'ta' onChange={ this.handleCheckedTA}/>
                  <Form.Checkbox label = 'Instructor' name= 'instructor' onChange={ this.handleCheckedIns} />
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message>
                Already have an account? Login <Link to="/signin">here</Link>
              </Message>
              {this.state.error === "" ? (
                  ""
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
