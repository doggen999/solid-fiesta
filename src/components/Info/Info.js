import React from "react";
import PropTypes from "prop-types";

import { Route, useRouteMatch } from "react-router-dom";
import InfoView from "../InfoView/InfoView";

import Icon from "../Icon";
import Hero from "../Hero";
import Tabs from "../Tabs";
import InfoItem from "../InfoItem";

export const Info = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <Route path={`${url}/:establishmentId`}>
        <InfoView />
      </Route>
    </div>
  );
};

Info.propTypes = {};
Info.defaultProps = {};

export default Info;
