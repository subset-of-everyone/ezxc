import React from "react";
import { Container, Button, Header, Grid, Divider } from "semantic-ui-react";

export default class StudentHomepage extends React.Component
{
  render()
  {
    return (
        <Container>
          <Grid style={{ marginBottom: "70px" }}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">Due Fri 9/12</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                <Button fluid>Searching and Sorting<p className="button-dates">Fri 9/12</p></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Grid style={{ marginTop: "70px" }}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">Past Extra Credit Forms</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} centered>
              <Grid.Column>
                <Button fluid>Asymptotic Analysis<p className="button-dates">Thurs 8/24</p></Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid>Worst, Average, and Best Cases<p className="button-dates">Tues 8/21</p></Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid disabled>Divide and Conquer<p className="button-dates">Mon 7/24</p></Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Grid.Column>
                <Button fluid>Recurrences<p className="button-dates">Mon 7/13</p></Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid>Randomized Algorithms<p className="button-dates">Mon 6/13</p></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
