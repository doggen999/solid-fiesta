import * as TYPES from "../consts/actionTypes";

export const toggleSortAndFilter = { type: TYPES.TOGGLE_SORT_AND_FILTER };

export const setSortingCriterion = (criterion) => ({
  type: TYPES.SET_SORTING_CRITERION,
  payload: criterion,
});

export const setFiltering = (level) => ({
  type: TYPES.SET_FILTERING,
  payload: level,
});

export const setSortingAscending = (value) => ({
  type: TYPES.SET_SORTING_ASCENDING,
  payload: value,
});

export const setShowInfo = (value) => ({
  type: TYPES.SET_SHOWINFO,
  payload: value,
});
