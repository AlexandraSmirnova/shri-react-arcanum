import rootReducer from './reducers';
import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import logger from 'redux-logger';
import { initThunk } from './thunks';
import { State } from './types';
import { Action } from 'typesafe-actions';


const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

(store.dispatch as ThunkDispatch<State, void, Action>)(initThunk());

export default store;