import { useRef, useEffect } from "react";
import css from "./Modal.module.css";

import PropTypes from "prop-types";

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  imageUrl: PropTypes.string,
};

export default function Modal({ isOpen, onClose, imageUrl }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleImageClick = () => {
    onClose();
  };

  return isOpen ? (
    <div className={css.Overlay}>
      <div className={css.Modal} ref={modalRef}>
        <img
          src={imageUrl}
          alt={imageUrl}
          className={css.modalImage}
          onClick={handleImageClick}
        />
      </div>
    </div>
  ) : null;
}
