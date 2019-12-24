import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunkMiddleware from "redux-thunk";
import { cacheEnhancer } from "redux-cache";

const middlewares = [logger, thunkMiddleware];
const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(...middlewares), cacheEnhancer())
);

export default store;
