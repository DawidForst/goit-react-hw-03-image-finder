import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";
import PropTypes from "prop-types";

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
}
