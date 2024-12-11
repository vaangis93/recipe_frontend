import { useState } from "react";
import apiFacade from "../apiFacade";
import Login from "../pages/LogIn";
import styled from "styled-components";
import * as modalstyle from "./ModalStyledComponents";



function LoggedIn() {
  const [showModal, setShowModal] = useState(false); // get loggedIn from Login components usestate

  const handleLogout = () => {
    apiFacade.logout();
    console.log("You are now logged in"); // get loggedIn from Login components usestate to check if user is logged in
    window.location.reload();
    console.log("You are now logged out");
  };

  const clickHandle = () => {
    setShowModal(true); // Show the modal when logout is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal without logging out
  };

  return (
    <div>
      <h2>Welcome! You are now logged in.</h2>
      {/* Add any additional content you want to display for logged-in users */}
      <p>This is where you can show user-specific information or features.</p>
      <button onClick={clickHandle}>Logout</button>
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
    </div>
  );
}

export default LoggedIn;
