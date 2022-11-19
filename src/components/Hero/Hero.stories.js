import React from "react";
import { faker } from "@faker-js/faker";

import Hero from "./index";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const Primary = () => (
  <Hero
    name={faker.company.name()}
    rating={{
      score: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
      numberOfRatings: faker.datatype.number(100),
    }}
  />
);
