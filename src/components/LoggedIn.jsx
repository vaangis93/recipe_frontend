import { useState } from "react";
import apiFacade from "../apiFacade";
import Login from "../pages/LogIn";
import styled from "styled-components";
import * as modalstyle from "./ModalStyledComponents";
import { NavLink } from "react-router";
import TopMenu from "./TopMenu";

function LoggedIn() {
  const [showModal, setShowModal] = useState(false); // get loggedIn from Login components usestate
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("You are now logged in");
    apiFacade.loggedIn
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    apiFacade.logout();
    console.log("You are now logged in"); // get loggedIn from Login components usestate to check if user is logged in
    window.location.reload();
    setIsLoggedIn(false);
    console.log("You are now logged out");
    showModal(false);
  };

  const clickHandle = () => {
    setShowModal(true); // Show the modal when logout is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal without logging out
  };

  return (
    <div>
      {/* THIS IS WHERE WE PASS OUR FUNCTIONS AS PROPS TO TopMenu !! */}
      <TopMenu
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={clickHandle} // Pass modal logic here
      />
       <div>
        {isLoggedIn ? (
          <h2>
            Welcome! Click <NavLink to="/recipe">here</NavLink> to browse recipes.
          </h2>
        ) : (
          <h2>Please log in to access recipes.</h2>
        )}
      </div>



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
