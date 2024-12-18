// ModalStyledComponents.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const ModalButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.primary ? "#ff4d4f" : "#4CAF50")};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  gap: 5px;

  &:hover {
    background: ${(props) => (props.primary ? "#d9363e" : "#45a049")};
  }
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;


