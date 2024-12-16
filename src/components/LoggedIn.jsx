import { useState } from "react";
import apiFacade from "../apiFacade";
// import styled from "styled-components";
import * as modalstyle from "../styles/ModalStyledComponents";
// import TopMenu from "./TopMenu";
import { NavLink } from "react-router";

function LoggedIn() {
  // State for login status and modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // // Handle login logic
  // const handleLogin = async () => {
  //   try {
  //     console.log("Logging in...");
  //     await apiFacade.login("username", "password"); // Replace with actual credentials
  //     setIsLoggedIn(true);
  //     console.log("You are now logged in");
  //   } catch (err) {
  //     console.error("Login failed:", err);
  //   }
  // };
  // Handle logout logic

  const handleLogout = () => {
    apiFacade.logout();
    setIsLoggedIn(false);
    setShowModal(false);
    console.log("You are now logged out");
  };

  // // Open modal for logout confirmation
  // const clickHandle = () => setShowModal(true);

  // Close modal without logging out
 
 
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div>
        <h2>
          Welcome! Click <NavLink to="/recipe">here</NavLink> to browse recipes.
        </h2>
      </div>

      {/* Logout confirmation modal */}
      {showModal && (
        <modalstyle.ModalOverlay>
          <modalstyle.ModalContent>
            <h3>Are you sure you want to log out?</h3>
            <modalstyle.ModalButton primary onClick={handleLogout}>
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

export default LoggedIn;
