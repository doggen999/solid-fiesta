import React from "react";
import PropTypes from "prop-types";

import styles from "./ListItem.module.scss";

import Rating from "../Rating";
import Icon from "../Icon";

export const ListItem = ({ establishment, appointment }) => {
  const formatTime = (time) =>
    ("0" + time.getHours()).slice(-2) +
    "." +
    ("0" + time.getMinutes()).slice(-2);

  const formatDuration = (duration) =>
    duration >= 60
      ? Math.floor(duration / 60) + "h " + (duration % 60) + "m"
      : duration + " min";

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  return (
    <div className={styles.listItem}>
      <div className={styles.appointment_time}>
        {formatTime(appointment.time)}
      </div>
      <h2 className={styles.establishmen_name}>{establishment.name}</h2>
      <div className={styles.establishmen_rating}>
        <Rating
          rating={establishment.rating.score}
          numberOfRatings={establishment.rating.numberOfRatings}
        />
      </div>
      <div className={styles.establishmen_address}>
        {establishment.address.streetAddress}
      </div>
      <div className={styles.appointment_price}>
        {formatPrice(appointment.price)}
      </div>
      <div className={styles.appointment_duration}>
        {formatDuration(appointment.duration)}
      </div>
      <div className={styles.navigate}>
        <Icon type="chevron_right_small" />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  establishment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      streetAddress: PropTypes.string,
      zipCode: PropTypes.string,
      city: PropTypes.string,
    }).isRequired,
  }),
  appointment: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    price: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  }),
};
ListItem.defaultProps = {};

export default ListItem;
