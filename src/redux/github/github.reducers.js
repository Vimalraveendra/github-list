import githubActionTypes from "./github.types";

const INITIAL_STATE = {
  userName: "",
  userId: "",
  isPending: false,
  error: ""
};

const githubReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case githubActionTypes.SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };

    case githubActionTypes.REQUEST_USER_PENDING:
      return {
        ...state,
        isPending: true
      };

    case githubActionTypes.REQUEST_USER_SUCCESS:
      return {
        ...state,
        isPending: false,
        userId: action.payload.id,
        userName: ""
      };

    case githubActionTypes.REQUEST_USER_FAILED:
      return {
        ...state,
        isPending: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default githubReducer;
