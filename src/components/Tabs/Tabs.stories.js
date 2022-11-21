import React from "react";
import { faker } from "@faker-js/faker";

import Tabs from "./index";
import InfoItem from "../InfoItem";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Primary = () => (
  <Tabs>
    <div label="info">
      <InfoItem iconType="address">This is an address</InfoItem>
      <div>{faker.lorem.paragraphs(2)}</div>
    </div>
    <div label="schedule">
      <div>tab content</div>
    </div>
  </Tabs>
);
