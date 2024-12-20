import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";
import { useState } from "react";
import apiFacade from "../apiFacade";
import { Instagram } from "lucide-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--small-device);
  width: 100%;
  border: 1px solid silver;
`;

// ------------- have all the login / logout logic in the MainLayout component because it is the parent component of all the other components. This way, we can pass the login state and login/logout functions as props to all the child components that need them. -------------

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
        
        <a
          href="https://www.instagram.com/vaangis/"
          // target="_blank" = open in new tab
          target="_blank" 
          // rel="noopener noreferrer" = security measure
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>

        <p>&copy; Emil Vang 2024</p>
        <p>Recipe Api v.1.0</p>
      </footer>
    </Container>
  );
}

export default MainLayout;
