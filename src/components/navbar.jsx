import React, { Component } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

class MainNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Blueprint</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default MainNavbar;
