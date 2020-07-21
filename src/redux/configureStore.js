// https://redux.js.org/recipes/configuring-your-store/#the-solution-configurestore

import {
  applyMiddleware,
  combineReducers,
  // compose,
  createStore,
} from "redux";
// import thunkMiddleware from 'redux-thunk'
import { createLogger } from "redux-logger";

import todo from "./modules/todo";

const reducer = combineReducers({
  todo,
});

const loggerMiddleware = createLogger();

const configureStore = (initialState = {}) => {
  const middlewares = [loggerMiddleware];
  // middlewares.push(thunkMiddleware)
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = [middlewareEnhancer]
  // enhancers.push(monitorReducersEnhancer)
  // const composedEnhancers = compose(...enhancers)

  const store = createStore(reducer, initialState, middlewareEnhancer);
  return store;
};

export default configureStore;
