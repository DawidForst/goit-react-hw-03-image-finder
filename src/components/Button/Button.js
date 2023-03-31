import React from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  onClick: PropTypes.func,
};

export default function Button({ onClick }) {
  return (
    <button className={css.Button} onClick={onClick}>
      Load More
    </button>
  );
}
