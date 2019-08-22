import React from "react";
import { Container, Grid, Icon, Menu, Table, Form, Button } from "semantic-ui-react";

export default class CreateCourseAlternate extends React.Component
{
  render()
  {
    const sections = [
      { text: "1", value: "1" },
      { text: "2", value: "2" },
      { text: "3", value: "3" },
      { text: "4", value: "4" },
    ];

    return (
        <Container style={{ width: "1000px" }}>
          <Grid style={{ marginBottom: "20px" }}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <label className="create-course-form-headers">Course Name</label>
              </Grid.Column>
              <Grid.Column style={{ display: "flex", justifyContent: "space-between" }}>
                <label className="create-course-form-headers">Add Sections</label>
                <Button inverted style={{ padding: "0 0 0 0" }} circular icon>
                  <Icon className="create-course-buttons" name="plus circle" size="big" />
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Input defaultValue="ICS 239: Intro to Cybersecurity" fluid name="Course name"/>
              </Grid.Column>
              <Grid.Column style={{ display: "flex", flexDirection: "column" }}>
                <Form.Input defaultValue="Section 1" style={{ paddingBottom: "15px", border: "none" }} fluid name="Add sections 1"/>
                <Form.Input defaultValue="Section 2" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
                <Form.Input defaultValue="Section 3" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
                <Form.Input defaultValue="Section 4" style={{ paddingBottom: "15px" }} fluid name="Add sections 2"/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
              <Grid.Column>
                <label className="create-course-form-headers">Add Students</label>
              </Grid.Column>
            </Grid.Row>
          </Grid>
{/*<<<<<<< HEAD*/}
          {/*<label className="create-course-form-headers">Add Students</label>*/}
          {/*<Table style={{ position: "absolute", width: "1110px", right: "17%", marginTop: "40px" }} definition celled>*/}
            {/*<Table.Header>*/}
              {/*<Table.Row>*/}
                {/*<Table.HeaderCell />*/}
                {/*<Table.HeaderCell><Icon name="triangle down" />Name</Table.HeaderCell>*/}
                {/*<Table.HeaderCell width="4"><Icon name="triangle down" />Student ID</Table.HeaderCell>*/}
                {/*<Table.HeaderCell width="3"><Icon name="triangle down" />Section #</Table.HeaderCell>*/}
              {/*</Table.Row>*/}
            {/*</Table.Header>*/}
            {/*<Table.Body>*/}
              {/*<Table.Row>*/}
                {/*<Table.Cell collapsing>*/}
                  {/*<Button>Delete</Button>*/}
                {/*</Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="Dave Alonzo" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="0000000" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>*/}
              {/*</Table.Row>*/}
              {/*<Table.Row>*/}
                {/*<Table.Cell collapsing>*/}
                  {/*<Button>Delete</Button>*/}
                {/*</Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="Gordon Hayman" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="0000001" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Select defaultValue="1" options={ sections } fluid/></Table.Cell>*/}
              {/*</Table.Row>*/}
              {/*<Table.Row>*/}
                {/*<Table.Cell>*/}
                  {/*<Button>Delete</Button>*/}
                {/*</Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="Alfred Mourning" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="0000010" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>*/}
              {/*</Table.Row>*/}
              {/*<Table.Row>*/}
                {/*<Table.Cell collapsing>*/}
                  {/*<Button>Delete</Button>*/}
                {/*</Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="Connor Zamon" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Input defaultValue="0000011" fluid/></Table.Cell>*/}
                {/*<Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>*/}
              {/*</Table.Row>*/}
            {/*</Table.Body>*/}
            {/*<Table.Footer>*/}
              {/*<Table.Row>*/}
                {/*<Table.HeaderCell/>*/}
                {/*<Table.HeaderCell colSpan="3">*/}
                  {/*<Button size="large" style={{ backgroundColor: "#FF7E55", color: "white" }}>*/}
                    {/*Add Another Student*/}
                  {/*</Button>*/}
                  {/*<Menu className="create-course-table" floated="right" pagination borderless>*/}
                    {/*<Menu.Item as="a"><Icon name="chevron left" /></Menu.Item>*/}
                    {/*<Menu.Item as="a">1</Menu.Item>*/}
                    {/*<Menu.Item as="a">2</Menu.Item>*/}
                    {/*<Menu.Item as="a">3</Menu.Item>*/}
                    {/*<Menu.Item as="a"><Icon name="chevron right" /></Menu.Item>*/}
                  {/*</Menu>*/}
                {/*</Table.HeaderCell>*/}
              {/*</Table.Row>*/}
            {/*</Table.Footer>*/}
          {/*</Table>*/}
{/*=======*/}
          <div>
            <Table definition celled style={{ position: "relative", width: "1060px", right: "60px" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell><Icon name="triangle down" />Name</Table.HeaderCell>
                  <Table.HeaderCell width="4"><Icon name="triangle down" />Student ID</Table.HeaderCell>
                  <Table.HeaderCell width="3"><Icon name="triangle down" />Section #</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button compact style={{ backgroundColor: "#F7F7F7" }} size="large" icon="trash"/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="Dave Alonzo" fluid/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="0000000" fluid/>
                  </Table.Cell>
                  <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button compact style={{ backgroundColor: "#F7F7F7" }} size="large" icon="trash"/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="Gordon Hayman" fluid/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="0000001" fluid/>
                  </Table.Cell>
                  <Table.Cell><Form.Select defaultValue="1" options={ sections } fluid/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button compact style={{ backgroundColor: "#F7F7F7" }} size="large" icon="trash"/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="Alfred Mourning" fluid/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="0000010" fluid/>
                  </Table.Cell>
                  <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    <Button compact style={{ backgroundColor: "#F7F7F7" }} size="large" icon="trash"/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="Connor Zamon" fluid/>
                  </Table.Cell>
                  <Table.Cell selectable>
                    <Form.Input className="create-course-table-input" transparent defaultValue="0000011" fluid/>
                  </Table.Cell>
                  <Table.Cell><Form.Select defaultValue="2" options={ sections } fluid/></Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell/>
                  <Table.HeaderCell colSpan="3">
                    <Button inverted style={{ padding: "0 0 0 0", margin: "5px auto auto 5px" }} circular icon>
                      <Icon className="create-course-buttons" name="plus circle" size="big" />
                    </Button>
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
          </div>
          <Button style={{ marginTop: "100px" }} size="massive" floated="right">Submit</Button>
{/*>>>>>>> master*/}
        </Container>
    );
  }
}
