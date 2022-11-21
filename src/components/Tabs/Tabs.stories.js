import React from "react";
import { faker } from "@faker-js/faker";

import Tabs from "./index";
import Tab from "../Tab";
import InfoItem from "../InfoItem";
import InfoItems from "../InfoItems";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Primary = () => (
  <Tabs>
    <div label="info">
      <InfoItems>
        <InfoItem iconType="address">This is an address</InfoItem>
      </InfoItems>
      <div>{faker.lorem.paragraphs(2)}</div>
    </div>
    <div label="schedule">
      <div>tab content</div>
    </div>
  </Tabs>
);
