import { NavLink } from "react-router";
import styled from "styled-components";

const StyledMenu = styled.ul`
display: flex;
list-style: none; // remove bulletpoint / chokoladeboller
gap: 15px;


`;

function TopMenu() {
  return (
    <>
      <StyledMenu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/recipe">Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/brainstorm">Brainstorm and vision</NavLink>
        </li>
      </StyledMenu>
    </>
  );
}

export default TopMenu;
