import repositoriesActionTypes from "./repositories.types";
import makeDebounce from "redux-debounce-thunk";
import { checkCacheValid } from "redux-cache";

export const handleRepositoryName = event => ({
  type: repositoriesActionTypes.SET_USER_REPOSITORY,
  payload: event
});

export const fetchUsers = name => (dispatch, getState) => {
  const isCacheValid = checkCacheValid(getState, "posts");
  if (isCacheValid) {
    return null;
  }
  if (name.length > 0) {
    dispatch({ type: repositoriesActionTypes.FETCH_USER_PENDING });
    fetch(
      `https://api.github.com/search/repositories?q=${name}&sort=id&sort=name&sort=stars& sort=created_at&order=desc`
    )
      .then(resp => resp.json())
      .then(data =>
        dispatch({
          type: repositoriesActionTypes.FETCH_USER_SUCCESS,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: repositoriesActionTypes.FETCH_USER_FAILED,
          payload: error
        })
      );
  }
};
export const debouncedActionCreator = makeDebounce(fetchUsers, 500);
