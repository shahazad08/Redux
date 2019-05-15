import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger'
import reducer from './reducer'
import createSagaMiddleware from "redux-saga";
const sagaMiddleware=createSagaMiddleware()

const store=createStore(
    reducer,
    applyMiddleware(logger,sagaMiddleware)
)
export default store;