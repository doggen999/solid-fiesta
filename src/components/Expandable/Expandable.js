import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon";

import styles from "./Expandable.module.scss";

export const Expandable = ({
  label,
  children,
  fullWidth,
  expanded,
  onClick,
}) => {
  const [contentHeight, setContentHeight] = useState(0);

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setContentHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div className={styles.expandable}>
      <div
        onClick={onClick}
        className={classnames(styles.header, {
          [styles.full_width]: fullWidth,
        })}
      >
        <div>{label}</div>
        <div
          className={classnames(styles.icon, { [styles.expanded]: expanded })}
        >
          <Icon type="chevron_right_down" />
        </div>
      </div>
      <div
        style={expanded ? { height: `${contentHeight}px` } : { height: "0" }}
        className={styles.content_wrapper}
      >
        <div ref={measuredRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

Expandable.propTypes = {
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  expanded: PropTypes.bool,
};

Expandable.defaultProps = {
  expanded: false,
  fullWidth: false,
  label: "Default label value",
};

export default Expandable;
