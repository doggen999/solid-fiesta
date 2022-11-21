import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";
import { DispatchProvider } from "../../app";
import { toggleSortAndFilter } from "../../actions/actions";

import SortAndFilter from "../SortAndFilter";
import Icon from "../Icon";

import styles from "./ListHeader.module.scss";

export const ListHeader = ({ label }) => {
  const dispatch = useContext(DispatchProvider);

  const toggleSortAndFilterHandler = () => {
    dispatch(toggleSortAndFilter);
  };

  return (
    <div className={styles.listHeader}>
      <div className={styles.topRow}>
        <Icon disabled type="chevron_left" />
        <h1>{`${label[0].toUpperCase()}${label.slice(1).toLowerCase()}`}</h1>
        <Icon type="settings" onClick={toggleSortAndFilterHandler} />
      </div>
      <SortAndFilter />
    </div>
  );
};

ListHeader.propTypes = {
  label: PropTypes.string.isRequired,
};
ListHeader.defaultProps = {};

export default ListHeader;
