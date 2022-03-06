import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PowerButton from "../SVG/PowerButton";
const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background: ${(props) => props.theme.body};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.hvrBtn};
    box-shadow: 0 0 8px 6px ${(props) => props.theme.hvrBtn};
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const HomeButton = () => {
  return (
    <>
      <Home>
        <Link to="/">
          <PowerButton width={30} height={30} fill="currentColor" />
        </Link>
      </Home>
    </>
  );
};

export default HomeButton;
