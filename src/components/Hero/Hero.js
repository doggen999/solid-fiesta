import React from "react";
import PropTypes from "prop-types";

import styles from "./Hero.module.scss";
import bgImg from "../../assets/images/background_photo.png";
import bgImg2 from "../../assets/images/background_photo@2x.png";
import bgImg3 from "../../assets/images/background_photo@3x.png";
import Icon from "../Icon";
import Rating from "../Rating";
import { useContext } from "react";
import { DispatchProvider } from "../../app";
import { setShowInfo } from "../../actions/actions";

export const Hero = ({ name, rating }) => {
  const dispatch = useContext(DispatchProvider);
  return (
    <div className={styles.hero}>
      <div className={styles.picture_wrapper}>
        <picture>
          <source
            type="image/png"
            srcSet={`${bgImg} 400w, ${bgImg2} 800w, ${bgImg3} 1200w`}
            sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
          />
          <img src={bgImg3} />
        </picture>
      </div>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Icon
            type="chevron_left_white"
            onClick={() => {
              dispatch(setShowInfo(false));
            }}
            clickable
          />
          <Icon disabled type="heart" />
        </div>
        <div className={styles.name_and_rating}>
          <h1 className={styles.name}>{name}</h1>
          <Rating
            rating={rating.score}
            numberOfRatings={rating.numberOfRatings}
          />
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number,
    numberOfRatings: PropTypes.number,
  }).isRequired,
};

Hero.defaultProps = {
  name: "Salon name",
  rating: {
    score: 4,
    numberOfRatings: 8,
  },
};

export default Hero;
