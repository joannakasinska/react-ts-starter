import { Reducer, combineReducers } from 'redux';
import { ReduxState } from './types';
import app from '../reducers';

const rootReducer: Reducer<ReduxState> = combineReducers({
    app,
});

export default rootReducer;
