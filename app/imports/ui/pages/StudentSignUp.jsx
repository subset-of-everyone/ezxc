import React from "react";
import { Form, Container } from "semantic-ui-react";

export default class StudentSignUp extends React.Component
{
  render()
  {
    return (
        <Container>
          <Form>
            <Form.Input label="First Name" placeholder="First name"/>
            <Form.Input label="Last Name" placeholder="Last name"/>
            <Form.Input label="Email" placeholder="Email"/>
            <Form.Input label="Password" placeholder="Password" type="password"/>
            <Form.Input label="Confirm Password" placeholder="Confirm Password" type="password"/>
          </Form>
        </Container>
    );
  }
}
