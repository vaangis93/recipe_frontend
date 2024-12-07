import { Outlet } from "react-router";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";
import TopMenu from "../components/TopMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--small-device); 
  width: 100%;
  border: 1px solid blue;
`;

function MainLayout() {
  return (
    <Container>
      <GlobalStyle />
      <header><TopMenu/></header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
        &copy; Emil Vang 2024
        </p>
        <p>
        Recipe Api v.1.0
        </p>
        </footer>
    </Container>
  );
}

export default MainLayout;
