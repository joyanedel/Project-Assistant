import { createStore, combineReducers } from 'redux';
import clientReducer from './reducers/clientReducer';

const appReducer = combineReducers({data: clientReducer});
const store = createStore(appReducer);

export default store;