import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";
import { StateContext } from "../../app";

import styles from "./Info.module.scss";

import Icon from "../Icon";
import Hero from "../Hero";
import Tabs from "../Tabs";
import InfoItem from "../InfoItem";

export const Info = () => {
  const state = useContext(StateContext);

  const selectedEstablishment = state.establishments.filter(
    (establishment) => establishment.id === state.selectedEstablishment
  )[0];

  return selectedEstablishment ? (
    <div className={styles.info}>
      <Hero
        name={selectedEstablishment.establishment.name}
        rating={selectedEstablishment.establishment.rating}
      />
      <Tabs>
        <div label="Info">
          <InfoItem iconType="address">
            {`${selectedEstablishment.establishment.address.streetAddress},
              ${selectedEstablishment.establishment.address.zipCode}
              ${selectedEstablishment.establishment.address.city}`}
          </InfoItem>
          <InfoItem iconType="time">
            <span style={{ marginRight: "0.5rem" }}>Will eventually close</span>
            <Icon disabled type="chevron_right_down" />
          </InfoItem>
          <InfoItem iconType="phone">
            {selectedEstablishment.establishment.phone}
          </InfoItem>
          <InfoItem iconType="website">
            {selectedEstablishment.establishment.web}
          </InfoItem>
          <div className={styles.pitch}>
            {selectedEstablishment.establishment.pitch}
          </div>
        </div>
        <div label="Schedule"></div>
      </Tabs>
    </div>
  ) : (
    ""
  );
};

Info.propTypes = {};
Info.defaultProps = {};

export default Info;
