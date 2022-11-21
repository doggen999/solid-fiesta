import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

import styles from "./InfoItem.module.scss";

export const InfoItem = ({ iconType, children }) => (
  <div className={styles.infoItem}>
    <Icon type={iconType} />
    <div className={styles.wrapper}>{children}</div>
  </div>
);

InfoItem.propTypes = {
  iconType: PropTypes.string.isRequired,
};
InfoItem.defaultProps = {};

export default InfoItem;
