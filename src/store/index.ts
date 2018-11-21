import { createStore, combineReducers } from 'redux';
import { userReducer } from './me';

const reducers = combineReducers({
	me: userReducer
});

export const store = createStore(reducers);
