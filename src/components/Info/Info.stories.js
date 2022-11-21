import React from "react";
import { faker } from "@faker-js/faker";

import Info from "./index";

export default {
  title: "Views/Info",
  component: Info,
};

export const Primary = () => (
  <Info
    name={faker.company.name()}
    rating={{
      score: faker.datatype.number({ min: 0, max: 1, precision: 0.1 }),
      numberOfRatings: faker.datatype.number(100),
    }}
  />
);
