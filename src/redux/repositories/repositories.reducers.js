import repositoriesActionTypes from "./repositories.types";
import { DEFAULT_KEY, generateCacheTTL } from "redux-cache";

const INITIAL_STATE = {
  items: [],
  name: "",
  isPending: false,
  error: "",
  [DEFAULT_KEY]: null
};

const repositoryReuducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case repositoriesActionTypes.SET_USER_REPOSITORY:
      return {
        ...state,
        name: action.payload
      };

    case repositoriesActionTypes.FETCH_USER_PENDING:
      return {
        ...state,
        isPending: true
      };
    case repositoriesActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isPending: false,
        [DEFAULT_KEY]: generateCacheTTL(),
        items: action.payload.items,
        name: ""
      };
    case repositoriesActionTypes.FETCH_USER_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default repositoryReuducer;
