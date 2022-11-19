import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Tabs.module.scss";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className={styles.tabs}>
      {children.map((child, index) => (
        <div
          onClick={() => {
            setActiveTab(index);
          }}
          className={classnames(styles.tab, {
            [styles.active]: activeTab === index,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tabs.defaultProps = {};

export default Tabs;
