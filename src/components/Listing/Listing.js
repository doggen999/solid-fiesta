import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { StateContext } from "../../app";
import { useContext } from "react";

import ListHeader from "../ListHeader";
import List from "../List";
import ListItem from "../ListItem";

import styles from "./Listing.module.scss";

export const Listing = ({ header }) => {
  const state = useContext(StateContext);

  return (
    <div className={styles.listing}>
      <ListHeader label={header} />
      <List>
        {state.establishments
          .filter((establishment) => {
            const filteringValue = state.filtering;
            if (!filteringValue) return true;
            if (filteringValue === "low") {
              return establishment.appointment.price < 100;
            }
            if (filteringValue === "mid") {
              const price = establishment.appointment.price;
              return price >= 100 && price < 500;
            }
            return establishment.appointment.price >= 500;
          })
          .sort((a, b) => {
            switch (state.sortingCriterion) {
              case "name": {
                const aVal = state.sortingAscending
                    ? a.establishment[state.sortingCriterion]
                    : b.establishment[state.sortingCriterion],
                  bVal = state.sortingAscending
                    ? b.establishment[state.sortingCriterion]
                    : a.establishment[state.sortingCriterion];
                return aVal < bVal ? -1 : bVal < aVal ? 1 : 0;
              }
              case "rating": {
                const aVal = state.sortingAscending
                    ? a.establishment[state.sortingCriterion].score
                    : b.establishment[state.sortingCriterion].score,
                  bVal = state.sortingAscending
                    ? b.establishment[state.sortingCriterion].score
                    : a.establishment[state.sortingCriterion].score;
                return aVal < bVal ? -1 : bVal < aVal ? 1 : 0;
              }
              case "time":
              case "price": {
                const aVal = state.sortingAscending
                    ? a.appointment[state.sortingCriterion]
                    : b.appointment[state.sortingCriterion],
                  bVal = state.sortingAscending
                    ? b.appointment[state.sortingCriterion]
                    : a.appointment[state.sortingCriterion];
                return aVal < bVal ? -1 : bVal < aVal ? 1 : 0;
              }
            }
          })
          .map((item, index) => {
            return (
              <Link key={`list_item_${index}`} to={`info/${item.id}`}>
                <div>
                  <ListItem {...item} />
                </div>
              </Link>
            );
          })}
      </List>
    </div>
  );
};

Listing.propTypes = {
  header: PropTypes.string.isRequired,
};
Listing.defaultProps = {};

export default Listing;
