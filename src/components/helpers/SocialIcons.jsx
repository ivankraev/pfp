import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GitHub } from "../SVG/GitHub";
import { LinkedIn } from "../SVG/LinkedIn";
import { darkTheme } from "../Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <Link style={{ color: "inherit" }} to="/">
          <GitHub
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></GitHub>
        </Link>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }} to="/">
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          ></LinkedIn>
        </NavLink>
      </div>
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
