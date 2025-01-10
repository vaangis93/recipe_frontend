// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Updated TopMenu styles with hamburger menu support for mobile responsiveness.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import styled from "styled-components";
import { User } from "lucide-react";
import { NavLink } from "react-router";

// Styled container for the header - flexbox

// export const HeaderContainer = styled.header`
//   background-color: #1e3a8a; /* Blue color for header */
//   padding: 1rem 2rem; /* Padding for the header */
//   display: flex;
//   justify-content: center; /* Center the items horizontally */
//   align-items: center; /* Vertically align items in the middle */
//   color: white;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern look */

//   @media (max-width: 768px) {
//     padding: 1rem 1.5rem;
//   }
// `;

// Styled container for the header - grit

export const HeaderContainer = styled.header`
  background-color: #1e3a8a; /* Blue color for header */
  padding: 1rem 1rem; // Padding for the header
  display: grid;
  place-items: center; /* Centers the content both horizontally and vertically */
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for a modern look */

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;


// Hamburger icon for mobile
export const MenuIcon = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Styled navigation list
export const StyledMenu = styled.ul`
  display: flex;
  list-style: none; // removed the bullet points
  gap: 0px;
  margin: 0;
  justify-content: center;
  padding-inline-start: 0px;

  @media (max-width: 768px) {
    display: ${props => (props.menuOpen ? "flex" : "none")}; /* Show menu if open */
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

// Styled navigation link
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2563eb; /* Darker blue on hover */
  }

  &.active {
    background-color: #1d4ed8; /* Even darker blue for active state */
  }

  display: flex;
  align-items: center;
  gap: 5px;
`;

// User icon styled
export const UserIcon = styled(User)`
  color: white;
  font-size: 18px;
`;
