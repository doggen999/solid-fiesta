import initialState from "./initialState";
import * as actionTypes from "../consts/actionTypes";

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SORT_AND_FILTER:
      return {
        ...state,
        displaySortAndFilter: !state.displaySortAndFilter,
      };
    case actionTypes.SET_SORTING_CRITERION:
      return {
        ...state,
        sortingCriterion: action.payload,
        sortingAscending: action.payload === "rating" ? false : true,
      };
    case actionTypes.SET_FILTERING:
      return { ...state, filtering: action.payload };
    case actionTypes.SET_SORTING_ASCENDING:
      return { ...state, sortingAscending: action.payload };
    case actionTypes.SET_SELECTED_ESTABLISHMENT:
      return {
        ...state,
        selectedEstablishment: action.payload,
        showInfo: true,
      };
    case actionTypes.SET_SHOWINFO:
      return { ...state, showInfo: false };
    default:
      return state;
  }
};
