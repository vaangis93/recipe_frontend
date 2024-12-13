import { NavLink } from "react-router";
import styled from "styled-components";


const StyledMenu = styled.ul`
  display: flex;
  list-style: none; // remove bulletpoint / chokoladeboller
  gap: 15px;
`;

function TopMenu( isLoggedIn, handleLogin, handleLogout) {


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
        <NavLink
          onClick={isLoggedIn ? handleLogout : handleLogin}
          to="login"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </NavLink>
        </li>
        <li>
          <NavLink to="/brainstorm">Brainstorm and vision</NavLink>
        </li>
      </StyledMenu>
    </>
  );
}

export default TopMenu;
