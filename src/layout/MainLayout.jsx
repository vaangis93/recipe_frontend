import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";
import { useState } from "react";
import apiFacade from "../apiFacade";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--small-device);
  width: 100%;
  border: 1px solid blue;
`;

function MainLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  const handleLogin = () => {
    apiFacade.login(); // Call login API
    setIsLoggedIn(true); // Set the login state
    console.log("You are now logged in");
  };

  const handleLogout = () => {
    apiFacade.logout(); // Call logout API
    setIsLoggedIn(false); // Set the login state to false
    setShowModal(false);
   
    console.log("You are now logged out");
  };

 
  return (
    <Container>
      <GlobalStyle />
      <header>
        <TopMenu
          // THIS IS THE PROPS PASSED TO TOPMENU
          isLoggedIn={isLoggedIn} // Pass the login state to TopMenu
          handleLogin={handleLogin} // Pass login function to TopMenu
          handleLogout={handleLogout} // Pass logout function to TopMenu
        />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; Emil Vang 2024</p>
        <p>Recipe Api v.1.0</p>
      </footer>
    </Container>
  );
}

export default MainLayout;
