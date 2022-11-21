import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { useContext } from "react";
import { DispatchProvider, StateContext } from "../../app";
import {
  setSortingCriterion,
  setSortingAscending,
} from "../../actions/actions";

import styles from "./Sort.module.scss";

export const Sort = ({ critera }) => {
  const dispatch = useContext(DispatchProvider);
  const state = useContext(StateContext);

  return (
    <div>
      <span className={styles.label}>Sort:</span>
      <div className={styles.sort}>
        <div className={styles.critera}>
          <div>
            {critera.map((criterion, index) => (
              <span
                onClick={() => {
                  dispatch(setSortingCriterion(criterion));
                }}
                key={`criterion_${criterion}_${index}`}
                className={classnames(styles.criterion, {
                  [styles.active]: criterion === state.sortingCriterion,
                })}
              >
                {`${criterion[0].toUpperCase()}${criterion
                  .slice(1)
                  .toLowerCase()}`}
              </span>
            ))}
          </div>
          <div>
            <span
              onClick={() => {
                dispatch(setSortingAscending(true));
              }}
              className={classnames(styles.criterion, {
                [styles.active]: state.sortingAscending,
              })}
            >
              Asc
            </span>
            <span
              onClick={() => {
                dispatch(setSortingAscending(false));
              }}
              className={classnames(styles.criterion, {
                [styles.active]: !state.sortingAscending,
              })}
            >
              Desc
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Sort.propTypes = { critera: PropTypes.arrayOf(PropTypes.string) };
Sort.defaultProps = {};

export default Sort;
