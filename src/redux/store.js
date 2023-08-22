import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "redux/reducers";
import rootSaga from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const bindMiddleware = (middlewares) => applyMiddleware(...middlewares);

const store = createStore(rootReducer, bindMiddleware(middleware));
store.sagaTask = sagaMiddleware.run(rootSaga);
export default store;
