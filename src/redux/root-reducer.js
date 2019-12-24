import { combineReducers } from "redux";
import repositoryReducer from "./repositories/repositories.reducers";
import githubReducer from "./github/github.reducers";
import paginateReducer from "./paginate/paginate.reducers";

export default combineReducers({
  repository: repositoryReducer,
  github: githubReducer,
  paginate: paginateReducer
});
