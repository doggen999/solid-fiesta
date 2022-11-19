import React from "react";
import Icon from "./index";

export default {
  title: "Components/Icon",
  component: Icon,
};
export const Primary = () => (
  <>
    <Icon type="star_empty" />
    <br />
    <Icon type="star_filled" />
    <br />
    <Icon type="star_half" />
    <br />
    <Icon type="website" />
    <br />
    <Icon type="address" />
    <br />
    <Icon type="chevron_left" clickable />
    <br />
    <Icon type="chevron_down" clickable />
    <br />
    <Icon type="chevron_right" clickable />
    <br />
    <Icon type="heart" clickable />
    <br />
    <Icon type="phone" />
    <br />
    <Icon type="settings" clickable />
    <br />
    <Icon type="time" />
    <br />
    <Icon />
  </>
);

export const ClickableIcon = () => <Icon type="heart" clickable />;

export const MissingIconType = () => <Icon />;
