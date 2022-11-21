import React, { useReducer } from "react";
import classNames from "classnames";

import initialState from "./reducers/initialState";
import reducer from "./reducers/reducer";

import Listing from "./components/Listing";
import Info from "./components/Info";

import styles from "./app.scss";

export const StateContext = React.createContext(initialState);
export const DispatchProvider = React.createContext(null);

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchProvider.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div
          className={classNames(styles.app, {
            [styles.viewInfo]: state.showInfo,
          })}
          style={{ display: "flex", width: "200vw" }}
        >
          <Listing header="Hair" />
          <Info />
        </div>
      </StateContext.Provider>
    </DispatchProvider.Provider>
  );
};
