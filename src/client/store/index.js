import rootReduces from './reducers';
import { createStore } from 'redux';

const store = createStore(rootReduces);

export default store;