import React, { useReducer } from "react";
import classNames from "classnames";
import { Route, Switch } from "react-router-dom";

import initialState from "./reducers/initialState";
import reducer from "./reducers/reducer";

import Listing from "./components/Listing";
import Info from "./components/Info";
import Home from "./components/Home";

import styles from "./app.scss";

export const StateContext = React.createContext(initialState);
export const DispatchProvider = React.createContext(null);

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchProvider.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className={classNames(styles.app)}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <Listing header="Hair" />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
        </div>
      </StateContext.Provider>
    </DispatchProvider.Provider>
  );
};
