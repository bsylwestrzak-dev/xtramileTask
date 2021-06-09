import { userReducer } from './userReducer';
import { pageReducer } from './pageReducer';
import { dataReducer } from './dataReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    userReducer,
    pageReducer,
    dataReducer
})