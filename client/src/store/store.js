import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
