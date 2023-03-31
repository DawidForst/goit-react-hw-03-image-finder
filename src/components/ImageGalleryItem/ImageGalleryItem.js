import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import css from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <li className={css.ImageGalleryItem}>
        <div onClick={handleImageClick}>
          <img
            src={webformatURL}
            alt={webformatURL}
            className={css.ImageGalleryItemImage}
          />
        </div>
      </li>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={largeImageURL}
      />
    </>
  );
}
