import React from "react";
import { Container, Header, Table, Icon, Grid, Message } from "semantic-ui-react";

export default class ViewSection extends React.Component
{
  render()
  {
    return (
        <Container>
          <Message compact floating>
            <Message.Header>Form Format</Message.Header>
            <Message.List>
              <Message.Item><b>Given</b>: the amount of points assigned by student</Message.Item>
              <Message.Item><b>Received</b>: the amount of points allotted to student</Message.Item>
            </Message.List>
          </Message>
          <Grid centered verticalAlign="middle">
            <Grid.Row style={{ paddingTop: "50px" }}>
              <Header className="ui centered aligned container" as="h1">Section 1</Header>
              <Table celled style={{ width: "900px" }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell><Icon name="triangle down"/>Student</Table.HeaderCell>
                    <Table.HeaderCell width={2}><Icon name="triangle down"/>Form 1</Table.HeaderCell>
                    <Table.HeaderCell width={2}><Icon name="triangle down"/>Form 2</Table.HeaderCell>
                    <Table.HeaderCell width={3}><Icon name="triangle down"/>Total Given</Table.HeaderCell>
                    <Table.HeaderCell width={3}><Icon name="triangle down"/>Total Received</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Bob Allington</Table.Cell>
                    <Table.Cell>3/3</Table.Cell>
                    <Table.Cell>4/3</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Dom Domingo</Table.Cell>
                    <Table.Cell>2/4</Table.Cell>
                    <Table.Cell>3/3</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Kevin Durcant</Table.Cell>
                    <Table.Cell>1/2</Table.Cell>
                    <Table.Cell>2/2</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Josh Macanoel</Table.Cell>
                    <Table.Cell>2/1</Table.Cell>
                    <Table.Cell>1/0</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
            <Grid.Row style={{ paddingTop: "50px" }}>
              <Header as="h1" className="ui center aligned container">Section 2</Header>
              <Table celled style={{ width: "900px" }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell><Icon name="triangle down"/>Student</Table.HeaderCell>
                    <Table.HeaderCell width={2}><Icon name="triangle down"/>Form 1</Table.HeaderCell>
                    <Table.HeaderCell width={2}><Icon name="triangle down"/>Form 2</Table.HeaderCell>
                    <Table.HeaderCell width={3}><Icon name="triangle down"/>Total Given</Table.HeaderCell>
                    <Table.HeaderCell width={3}><Icon name="triangle down"/>Total Received</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Dave Alonzo</Table.Cell>
                    <Table.Cell>3/3</Table.Cell>
                    <Table.Cell>4/3</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Gordon Hayman</Table.Cell>
                    <Table.Cell>2/4</Table.Cell>
                    <Table.Cell>3/3</Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>7</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Alfred Mourning</Table.Cell>
                    <Table.Cell>1/2</Table.Cell>
                    <Table.Cell>2/2</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>4</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Connor Zamon</Table.Cell>
                    <Table.Cell>2/1</Table.Cell>
                    <Table.Cell>1/0</Table.Cell>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>1</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
