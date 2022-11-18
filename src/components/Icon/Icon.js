import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

import iconDefinitions from "../../assets/icons/iconDefinitions";

import styles from "./Icon.module.scss";

export const Icon = ({ type, clickable }) => {
  return type ? (
    <svg className={classnames(styles.icon, { [styles.clickable]: clickable })}>
      <use href={`#${type}`} />
      {iconDefinitions}
    </svg>
  ) : (
    <span className={styles.icon}>☒</span>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
};

export default Icon;
