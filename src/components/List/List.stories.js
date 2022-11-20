import React from "react";
import { faker } from "@faker-js/faker";

import List from "./index";
import ListItem from "../ListItem";

export default {
  title: "Components/List",
  component: List,
  parameters: { actions: { handles: ["click"] } },
};

export const Primary = () => (
  <List>
    {new Array(faker.datatype.number(10)).fill("").map((item, index) => (
      <ListItem
        key={`list)_item_${index}`}
        establishment={{
          name: faker.company.name(),
          rating: {
            score: faker.datatype.number({ min: 0, max: 5, precision: 0.1 }),
            numberOfRatings: faker.datatype.number(100),
          },
          address: `${faker.address.street()} ${faker.address.buildingNumber()}`,
        }}
        appointment={{
          time: new Date(faker.date.soon()),
          price: faker.commerce.price(10, 999, 2),
          duration: faker.datatype.number(180),
        }}
      />
    ))}
  </List>
);
