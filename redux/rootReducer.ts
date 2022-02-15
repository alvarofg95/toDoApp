import {combineReducers} from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  tasks: reducer,
});

export default rootReducer;
