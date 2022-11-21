import React from "react";
import { faker } from "@faker-js/faker";

import Sort from "./index";

export default {
  title: "Components/Sort",
  component: Sort,
};

export const Primary = () => (
  <Sort critera={["name", "rating", "price", "time"]} />
);
