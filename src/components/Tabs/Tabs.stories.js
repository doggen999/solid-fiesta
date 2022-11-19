import React from "react";
import { faker } from "@faker-js/faker";

import Tabs from "./index";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Primary = () => (
  <Tabs>
    <div>Info</div>
    <div>Schedule</div>
  </Tabs>
);
