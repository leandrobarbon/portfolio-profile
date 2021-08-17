import React from "react";

import { Container, Primary, Secundary, Tertiary } from './styles';

function Navbar() {
  return (
    <Container>
      <Primary>
        <li>Home</li>
        <li>About</li>
      </Primary>
      <Secundary />
      <Tertiary>
        <li>Project</li>
        <li>Contact</li>
      </Tertiary>
    </Container>
  );
}

export default Navbar;