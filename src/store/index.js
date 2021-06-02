import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import documentReducer from "./document";
import investorReducer from "./investor";
import companyReducer from "./company";
import attorneyReducer from "./attorney";
// root reducer

const rootReducer = combineReducers({
  investor: investorReducer,
  document: documentReducer,
  company: companyReducer,
  attorney: attorneyReducer,
});

// add enhancer for prod / dev
let enhancer;
if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// configure store
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
