import React from "react";
import Expandable from "./index";

export default {
  title: "Components/Expandable",
  component: Expandable,
};

export const Primary = () => (
  <>
    <Expandable label="Collapsed">Content</Expandable>
    <br />
    <Expandable label="Collapsed / Full width" fullWidth>
      Full width expandable label
    </Expandable>
    <br />
    <Expandable expanded label="Expanded">
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
    </Expandable>
    <br />
    <Expandable expanded fullWidth label="Expanded / Full width">
      Full width expandable label
    </Expandable>
    <br />
  </>
);

export const FullWidthExpandable = () => (
  <>
    <Expandable fullWidth label="Full width ">
      Full width expandable
    </Expandable>
    <br />
    <Expandable fullWidth expanded label="Full width / Expanded ">
      Full width expanded
    </Expandable>
  </>
);

export const ExpandedExpandable = () => (
  <>
    <Expandable expanded label="Expanded">
      Expandable that is expanded "Content"
    </Expandable>
    <br />
    <Expandable expanded fullWidth label="Full width / Expanded">
      Expandable that is expanded "Content"
    </Expandable>
  </>
);
