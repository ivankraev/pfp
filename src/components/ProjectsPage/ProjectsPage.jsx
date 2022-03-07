import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Blogs } from "../../data/BlogData";
import img from "../../assets/Images/6.png";
import LogoComponent from "../helpers/LogoComponent";
import SocialIcons from "../helpers/SocialIcons";
import HomeButton from "../helpers/HomeButton";
import ProjectComonent from "../helpers/ProjectComponent";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  padding-bottom: 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ProjectsPage = () => {
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <LogoComponent theme="dark" />
        <HomeButton />
        <SocialIcons theme="dark" />

        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <ProjectComonent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default ProjectsPage;
