import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { GitHub } from "../SVG/GitHub";
import { LinkedIn } from "../SVG/LinkedIn";

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
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <Link style={{ color: "inherit" }} to="/">
          <GitHub width={25} height={25} fill="currentColor"></GitHub>
        </Link>
      </div>
      <div>
        <NavLink style={{ color: "inherit" }} to="/">
          <LinkedIn width={25} height={25} fill="currentColor"></LinkedIn>
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
