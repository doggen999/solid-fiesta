import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { DispatchProvider, StateContext } from "../../app";
import { setFiltering } from "../../actions/actions";

import styles from "./Filter.module.scss";

export const Filter = () => {
  const dispatch = useContext(DispatchProvider);
  const state = useContext(StateContext);

  const numberOfLowPriceAppointments = useMemo(() => {
    return state.establishments.filter((establishment) => {
      return establishment.appointment.price < 100;
    }).length;
  }, [state.establishments]);

  const numberOfMidPriceAppointments = useMemo(() => {
    return state.establishments.filter((establishment) => {
      return (
        establishment.appointment.price >= 100 &&
        establishment.appointment.price < 500
      );
    }).length;
  }, [state.establishments]);

  const numberOfHighPriceAppointments = useMemo(() => {
    return state.establishments.filter((establishment) => {
      return establishment.appointment.price >= 500;
    }).length;
  }, [state.establishments]);

  return (
    <div>
      <span className={styles.label}>Filter:</span>
      <div className={styles.filter}>
        <div className={styles.critera}>
          <div>
            <span
              onClick={() => {
                numberOfLowPriceAppointments > 0 &&
                  dispatch(setFiltering("low"));
              }}
              className={classnames(styles.criterion, {
                [styles.active]: state.filtering === "low",
                [styles.disabled]: numberOfLowPriceAppointments < 1,
              })}
            >
              {`<$99 (${
                numberOfLowPriceAppointments > 0
                  ? numberOfLowPriceAppointments
                  : 0
              })`}
            </span>
            <span
              onClick={() => {
                numberOfMidPriceAppointments > 0 &&
                  dispatch(setFiltering("mid"));
              }}
              className={classnames(styles.criterion, {
                [styles.active]: state.filtering === "mid",
                [styles.disabled]: numberOfMidPriceAppointments < 1,
              })}
            >
              {`$100-$499 (${
                numberOfMidPriceAppointments > 0
                  ? numberOfMidPriceAppointments
                  : 0
              })`}
            </span>
            <span
              onClick={() => {
                numberOfHighPriceAppointments > 0 &&
                  dispatch(setFiltering("high"));
              }}
              className={classnames(styles.criterion, {
                [styles.active]: state.filtering === "high",
                [styles.disabled]: numberOfHighPriceAppointments < 1,
              })}
            >
              {`>$500 (${
                numberOfHighPriceAppointments > 0
                  ? numberOfHighPriceAppointments
                  : 0
              })`}
            </span>
          </div>
          <div
            className={classnames(styles.criterion, {
              [styles.disabled]: !state.filtering,
            })}
            onClick={() => {
              !!state.filtering && dispatch(setFiltering(null));
            }}
          >
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {};
Filter.defaultProps = {};

export default Filter;
