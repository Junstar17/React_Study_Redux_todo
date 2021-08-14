import todos from './todos';
import counter from './counter';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todos,counter
});

export default rootReducer;
