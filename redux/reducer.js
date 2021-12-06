import {combineReducers} from 'redux';

const INITIAL_STATE = {
  toDo: [],
  done: [],
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  console.log('>action type', action.type)
  switch (action.type) {
    case 'ADD_TASK': {
      state.toDo.push(action.payload);
      return state;
    }
    case 'LOAD_TASKS': {
      return state;
    }
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
});
