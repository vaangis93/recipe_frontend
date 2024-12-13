import { NavLink } from "react-router";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as modalstyle from "../styles/ModalStyledComponents";
import { useState } from "react";

const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
`;



function TopMenu({ isLoggedIn, handleLogin, handleLogout }) {
  const [showModal, setShowModal] = useState(false);

  // Close modal without logging out
const closeModal = () => setShowModal(false);

  // Open modal for logout confirmation
  const clickHandle = () => setShowModal(true);

  const handleLogoutAndCloseModal = () => {
    handleLogout(); // Log out the user
    closeModal(); // Close the modal after logout
  };



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
        {/* Conditionally render Login/Logout */}
        <NavLink
            onClick={isLoggedIn ? clickHandle : handleLogin} // Use clickHandle for Logout
            to={isLoggedIn ? "/" : "/login"} // Navigate based on login state
          >
            {isLoggedIn ? "Logout" : "Login"}
          </NavLink>
      </li>
      <li>
        <NavLink to="/brainstorm">Brainstorm and vision</NavLink>
      </li>
    </StyledMenu>
        {showModal && (
          <modalstyle.ModalOverlay>
            <modalstyle.ModalContent>
              <h3>Are you sure you want to log out?</h3>
              <modalstyle.ModalButton primary onClick={handleLogoutAndCloseModal}>
                Yes
              </modalstyle.ModalButton>
              <modalstyle.LogoutButton onClick={closeModal}>
                No
              </modalstyle.LogoutButton>
            </modalstyle.ModalContent>
          </modalstyle.ModalOverlay>
        )}
</>
  );
}

// Define prop types
TopMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default TopMenu;
