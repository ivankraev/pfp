import React from "react";
import styled from "styled-components";
import HomeButton from "../helpers/HomeButton";
import LogoComponents from "../helpers/LogoComponents";
import SocialIcons from "../helpers/SocialIcons";
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

const HomePage = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponents />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
};

export default HomePage;
