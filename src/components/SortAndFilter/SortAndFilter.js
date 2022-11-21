import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";
import { DispatchProvider, StateContext } from "../../app";
import { toggleSortAndFilter } from "../../actions/actions";

import Sort from "../Sort";
import Filter from "../Filter";
import Expandable from "../Expandable";

import styles from "./SortAndFilter.module.scss";

export const SortAndFilter = () => {
  const dispatch = useContext(DispatchProvider);
  const state = useContext(StateContext);

  const displayFilter = () =>
    state.filtering === "low"
      ? "Low price"
      : state.filtering === "mid"
      ? "medium price"
      : "High price";

  return (
    <div className={styles.sortAndFilter}>
      <Expandable
        expanded={!!state.displaySortAndFilter}
        onClick={() => {
          dispatch(toggleSortAndFilter);
        }}
        fullWidth
        label={`Sorting on "${state.sortingCriterion[0].toUpperCase()}${state.sortingCriterion
          .slice(1)
          .toLowerCase()}".${
          state.filtering ? ` Filtering on "${displayFilter()}".` : ""
        }`}
      >
        <div className={styles.sort}>
          <Sort critera={["name", "rating", "price", "time"]} />
        </div>
        <Filter />
      </Expandable>
    </div>
  );
};

SortAndFilter.propTypes = {};
SortAndFilter.defaultProps = {};

export default SortAndFilter;
