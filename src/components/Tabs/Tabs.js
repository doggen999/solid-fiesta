import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Tabs.module.scss";

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        {children.map((child, index) => (
          <div
            key={`tab_${index}`}
            onClick={() => {
              setActiveTab(index);
            }}
            className={classnames(styles.tab, {
              [styles.active]: activeTab === index,
            })}
          >
            {`${child.props.label[0].toUpperCase()}${child.props.label
              .slice(1)
              .toLowerCase()}`}
          </div>
        ))}
      </div>
      <div className={styles.tabsContent}>
        {children[activeTab].props.children}
      </div>
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
