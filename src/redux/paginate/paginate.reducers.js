import paginateActionTypes from "./pagiante.types";

const INITIAL_STATE = {
  currentPage: 1,
  postsPerPage: 5
};

const paginateReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case paginateActionTypes.SET_PAGE_PAGIANTE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
};

export default paginateReducer;
