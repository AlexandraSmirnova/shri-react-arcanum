import rootReducer from './reducers';
import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initThunk } from './thunks';
import { ThunkDispatchWrap } from './types';


const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

(store.dispatch as ThunkDispatchWrap)(initThunk());

export default store;