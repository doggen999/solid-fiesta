import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

import iconDefinitions from "../../assets/icons/iconDefinitions";

import styles from "./Icon.module.scss";

export const Icon = ({ type, clickable, small }) => {
  return type ? (
    <svg
      className={classnames(styles.icon, {
        [styles.clickable]: clickable,
        [styles.small]: small,
      })}
    >
      <use href={`#${type}`} />
      {iconDefinitions}
    </svg>
  ) : (
    <span className={classnames(styles.icon, { [styles.small]: small })}>
      ☒
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  small: PropTypes.bool,
};

Icon.defaultProps = {
  small: false,
};
export default Icon;
