import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { RiComputerLine } from "react-icons/ri";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href ="/">
        <a style ={{ display: "flex", alignItems: "center", color:  '#5D160F', marginBottom: '20px'}}>
          <RiComputerLine size = "3rem" />
          </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "https://ndnrlg.github.io/#about">
          <NavLink href = "https://ndnrlg.github.io/#about">about</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "https://ndnrlg.github.io/#projects">
          <NavLink href = "https://ndnrlg.github.io/#projects">projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://www.linkedin.com/in/nandinineralagi/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href = "https://twitter.com/ndnrlg">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href = "https://github.com/ndnrlg">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
