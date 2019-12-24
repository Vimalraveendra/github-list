import githubActionTypes from "./github.types";

export const userNameChange = value => ({
  type: githubActionTypes.SET_USER_NAME,
  payload: value
});

export const requestUser = userName => dispatch => {
  dispatch({ type: githubActionTypes.REQUEST_USER_PENDING });
  fetch(`https://api.github.com/users/${userName}`)
    .then(resp => resp.json())
    .then(data =>
      dispatch({ type: githubActionTypes.REQUEST_USER_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: githubActionTypes.REQUEST_USER_PENDING, payload: error })
    );
};
