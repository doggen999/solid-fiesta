import React from "react";
import { faker } from "@faker-js/faker";
import Rating from "./index";

export default {
  title: "Components/Rating",
  component: Rating,
};

export const Primary = () => (
  <>
    <Rating rating={0} numberOfRatings={faker.datatype.number(100)} />
    <br />
    <Rating rating={5} numberOfRatings={faker.datatype.number(100)} />
    <br />
    <Rating rating={2} numberOfRatings={faker.datatype.number(100)} />
    <br />
    <Rating rating={3.5} numberOfRatings={faker.datatype.number(100)} />
    <br />
  </>
);

export const RoundedRating = () => (
  <>
    <>
      <span>Rating 2.2 should display 2 stars</span>
      <Rating rating={2.2} numberOfRatings={faker.datatype.number(100)} />
    </>
    <br />
    <>
      <span>Rating 2.3 should display 2.5 stars</span>
      <Rating rating={2.3} numberOfRatings={faker.datatype.number(100)} />
    </>
    <br />
    <>
      <span>Rating 2.7 should also display 2.5 stars</span>
      <Rating rating={2.7} numberOfRatings={faker.datatype.number(100)} />
    </>
    <br />
    <>
      <span>Rating 2.8 should also display 3 stars</span>
      <Rating rating={2.8} numberOfRatings={faker.datatype.number(100)} />
    </>
    <br />
  </>
);
