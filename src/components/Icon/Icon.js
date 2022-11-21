import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icons from "../../assets/icons";

import styles from "./Icon.module.scss";

export const Icon = ({ type, disabled, onClick }) => (
  <div
    className={classNames(styles.icon, { [styles.disabled]: disabled })}
    onClick={onClick}
  >
    <img src={Icons[type]} />
  </div>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {};

export default Icon;
