"use client";
import { Button, Navbar } from "@nextui-org/react";
import React from "react";

const Navigation = () => {
  return (
    <Navbar variant={"sticky"}>
      <Navbar.Brand>M.R.</Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link>About Me</Navbar.Link>
        <Navbar.Link>Skills</Navbar.Link>
        <Navbar.Link>Portofolio</Navbar.Link>
        <Navbar.Link>
          <Button size={"sm"}>Contact Me</Button>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
