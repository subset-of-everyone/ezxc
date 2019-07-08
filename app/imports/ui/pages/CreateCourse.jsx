import React from "react";
import { Grid, Form, Container, Table, Icon, Menu, Button, Header } from "semantic-ui-react";

export default class CreateCourse extends React.Component
{
  render()
  {
    return (
        <Container>
          <Grid columns={2} centered verticalAlign="middle">
            <Grid.Row>
              <Grid.Column> </Grid.Column>
              <Grid.Column>
                <Header as="h1" style={{ fontSize: "34px", paddingBottom: "10px" }} textAlign="center">Preview</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: "35px 0px 35px 0px" }}>
              <Grid.Column>
                <Form>
                  <Header as="h3">Course name</Header>
                  <Form.Input name="Course name" placeholder="Name"/>
                </Form>
              </Grid.Column>
              <Grid.Column><Header as="h2" textAlign="center">ICS 239: Intro to Cybersecurity</Header></Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: "35px 0px 35px 0px" }}>
              <Grid.Column>
                <Form style={{ position: "relative" }}>
                  <Header as="h3">Add sections</Header>
                  <Form.Input name="Add sections" placeholder="Section #"/>
                  <Button inverted style={{ padding: "0 0 0 0" }} circular icon>
                    <Icon className="create-course-buttons" name="plus circle" size="big" />
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Grid columns={2} textAlign="center">
                  <Grid.Row className="create-course-sections">Section 1 (1)</Grid.Row>
                  <Grid.Row className="create-course-sections">Section 2 (3)</Grid.Row>
                  <Grid.Row className="create-course-sections">Section 4 (5)</Grid.Row>
                  <Grid.Row className="create-course-sections">Section 3 (1)</Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: "35px 0px 35px 0px" }}>
              <Grid.Column>
                <Form>
                  <Header as="h3">Add students</Header>
                  <Form.Input name="Student" placeholder="Student name" />
                  <Form.Input name="Student ID" placeholder="Student ID" />
                  <Form.Input name="Section #" placeholder="Section #" />
                  <Button inverted style={{ padding: "0 0 0 0" }} circular icon>
                    <Icon className="create-course-buttons" name="plus circle" size="big" />
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell><Icon name="triangle down" />Name</Table.HeaderCell>
                      <Table.HeaderCell width="4"><Icon name="triangle down" />ID</Table.HeaderCell>
                      <Table.HeaderCell width="4"><Icon name="triangle down" />Section #</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Dave Alonzo</Table.Cell>
                      <Table.Cell>0000000</Table.Cell>
                      <Table.Cell>2</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Gordon Hayman</Table.Cell>
                      <Table.Cell>0000001</Table.Cell>
                      <Table.Cell>1</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Alfred Mourning</Table.Cell>
                      <Table.Cell>0000010</Table.Cell>
                      <Table.Cell>2</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Connor Zamon</Table.Cell>
                      <Table.Cell>0000011</Table.Cell>
                      <Table.Cell>2</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell colSpan="3">
                        <Menu className="create-course-table" floated="right" pagination borderless>
                          <Menu.Item as="a"><Icon name="chevron left" /></Menu.Item>
                          <Menu.Item as="a">1</Menu.Item>
                          <Menu.Item as="a">2</Menu.Item>
                          <Menu.Item as="a">3</Menu.Item>
                          <Menu.Item as="a"><Icon name="chevron right" /></Menu.Item>
                        </Menu>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column> </Grid.Column>
              <Grid.Column textAlign="center">
                <Button size="huge">Submit</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
