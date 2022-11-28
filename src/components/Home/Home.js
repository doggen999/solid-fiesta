import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

export const Home = () => (
  <div className={styles.home}>
    <div>
      <h1>Cloud9 - Tech test</h1>
    </div>
    <nav>
      <Link to="/list">List of establishments</Link>
    </nav>
  </div>
);

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
