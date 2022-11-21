import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

import styles from "./Rating.module.scss";

export const Rating = ({ numberOfRatings, rating, numberOfRatingSteps }) => {
  // Memoize (if function) &/| Utilize
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = [];
  for (let i = 0; i <= numberOfRatingSteps - 1; i++) {
    const starType =
      roundedRating - i === 0.5
        ? "star_half"
        : i < roundedRating
        ? "star_filled"
        : "star_empty";

    stars.push(<Icon key={`rating-star_${i}`} type={starType} />);
  }
  return (
    <div className={styles.rating}>
      <>
        {[...stars]}
        <div className={styles.number_of_ratings}>{`(${numberOfRatings})`}</div>
      </>
    </div>
  );
};

Rating.propTypes = {
  numberOfRatings: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  numberOfRatingSteps: PropTypes.number,
};
Rating.defaultProps = {
  numberOfRatings: 0,
  numberOfRatingSteps: 5,
};

export default Rating;
