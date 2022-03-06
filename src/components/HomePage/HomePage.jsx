import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "../helpers/HomeButton";
import LogoComponents from "../helpers/LogoComponents";
import SocialIcons from "../helpers/SocialIcons";
import { YingYang } from "../SVG/YingYang";

const rotate = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`;

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Work = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const About = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.open ? "85%" : "50%")};
  left: ${(props) => (props.open ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
    display: ${(props) => (props.open ? "none" : "inline-block")};
  }
`;

const HomePage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponents />
        <SocialIcons />
        <Center open={open}>
          <YingYang
            width={open ? 120 : 200}
            height={open ? 120 : 200}
            fill="currentColor"
            onClick={handleOpen}
          />
          <span>click here</span>
        </Center>

        <Contact
          target="_blank"
          to={{ pathname: "mailto:ivankraev122@gmail.com" }}
        >
          <h2>Say hi...</h2>
        </Contact>
        <Work to="/work">
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About to="/about">
            <h2>About</h2>
          </About>
          <Skills to="/skills">
            <h2>Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default HomePage;
