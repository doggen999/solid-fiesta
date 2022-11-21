import React from "react";
import { faker } from "@faker-js/faker";

import Icon from "./index";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Primary = () => (
  <>
    <Icon type="website" />
    <Icon type="address" />
    <Icon type="chevron_left_white" />
    <Icon type="chevron_left" />
    <Icon type="chevron_right_down" />
    <Icon type="chevron_right_small" />
    <Icon type="heart" />
    <Icon type="phone" />
    <Icon type="settings" />
    <Icon type="star_empty_small" />
    <Icon type="star_empty" />
    <Icon type="star_filled_small" />
    <Icon type="star_filled" />
    <Icon type="star_half_small" />
    <Icon type="star_half" />
    <Icon type="time" />
  </>
);
