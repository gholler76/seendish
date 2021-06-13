import {combineReducers} from 'redux';

import auth from './auth';
import bubble from './bubble';

export const reducers = combineReducers({auth, bubble});