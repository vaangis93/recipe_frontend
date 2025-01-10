// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Updated TopMenu with a burger menu for mobile responsiveness.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router";
import * as modalstyle from "../styles/ModalStyledComponents"; // If you have additional modal styles
import {
  HeaderContainer,
  StyledMenu,
  StyledNavLink,
  MenuIcon, // Added MenuIcon for the burger menu
} from "../styles/TopMenuStyles"; // Import styled components
import { Home, Info, User, Utensils, Eye } from "lucide-react";

const TopMenu = ({ isLoggedIn, handleLogin, handleLogout }) => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Added state to toggle menu visibility

  // Close modal without logging out
  const closeModal = () => setShowModal(false);

  // Open modal for logout confirmation
  const clickHandle = () => setShowModal(true);

  const handleLogoutAndCloseModal = () => {
    handleLogout(); // Log out the user
    closeModal(); // Close the modal after logout
  };

  // Toggle the menu visibility on mobile
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <HeaderContainer>
        <nav>
          {/* Hamburger icon for mobile */}
          <MenuIcon onClick={toggleMenu}>☰</MenuIcon>

          <StyledMenu menuOpen={menuOpen}>
            <li>
              <StyledNavLink to="/" activeClassName="active">
                <Home />
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/recipe" activeClassName="active">
                <Utensils />
                Recipe
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about" activeClassName="active">
                <Info />
                About
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                onClick={isLoggedIn ? clickHandle : handleLogin} // Use clickHandle for Logout
                to={isLoggedIn ? "/" : "/login"} // Navigate based on login state
              >
                <User />
                {isLoggedIn ? "Logout" : "Login"}
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/brainstorm" activeClassName="active">
                <Eye />
                Vision
              </StyledNavLink>
            </li>
          </StyledMenu>
        </nav>
      </HeaderContainer>

      {showModal && (
        <modalstyle.ModalOverlay>
          <modalstyle.ModalContent>
            <h3>Are you sure you want to log out?</h3>
            <modalstyle.ModalButton onClick={handleLogoutAndCloseModal}>
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
};

// Define prop types
TopMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default TopMenu;
