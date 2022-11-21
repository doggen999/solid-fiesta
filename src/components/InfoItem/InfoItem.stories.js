import React from "react";
import { faker } from "@faker-js/faker";

import InfoItem from "./index";

import Expandable from "../Expandable";

export default {
  title: "Components/InfoItem",
  component: InfoItem,
};

export const Primary = () => (
  <InfoItem iconType="address">
    {`${faker.address.street()} ${faker.address.buildingNumber()}, ${faker.address.zipCode(
      "### ##"
    )} ${faker.address.city()}`}
  </InfoItem>
);

export const Phone = () => (
  <InfoItem iconType="phone">
    {`${faker.phone.number("+46 (0) 8## ### ###")}`}
  </InfoItem>
);

export const Web = () => (
  <InfoItem iconType="website">{`${faker.internet.url()}`}</InfoItem>
);
