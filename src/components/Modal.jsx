import PropTypes from "prop-types";
import * as modalstyle from "../styles/ModalStyledComponents";

const Modal = ({ isOpen, onClose, onConfirm, title, confirmText, cancelText }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <modalstyle.ModalOverlay>
      <modalstyle.ModalContent>
        <h3>{title}</h3>
        <modalstyle.ModalButton onClick={onConfirm}>
            {title}
          {confirmText || "Yes"}
        </modalstyle.ModalButton>
        <modalstyle.LogoutButton onClick={onClose}>
          {cancelText || "No"}
        </modalstyle.LogoutButton>
      </modalstyle.ModalContent>
    </modalstyle.ModalOverlay>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}
;

export default Modal;
