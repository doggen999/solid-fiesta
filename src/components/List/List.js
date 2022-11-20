import React from "react";
import PropTypes from "prop-types";

import styles from "./List.module.scss";

export const List = ({ children }) => (
  <div className={styles.list}>{children}</div>
);

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
List.defaultProps = {};

export default List;
