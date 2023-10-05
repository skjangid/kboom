import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import  { global }  from "./reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose; 

const reducer = combineReducers({ global });
let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
} else {
  store = createStore(reducer, applyMiddleware(thunk));
}

export default store;
