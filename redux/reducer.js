import {combineReducers} from 'redux';

const INITIAL_STATE = {
  toDo: [],
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const {toDo} = state;
      toDo.push({id: Date.now().toString(), text: action.payload, done: false});
      return {...state, toDo};
    }
    case 'LOAD_TASKS': {
      return {...state};
    }
    case 'CHECK_TASK': {
      const [...toDo] = state.toDo;
      const taskIndex = toDo.findIndex(item => item.id === action.payload);
      if (taskIndex > -1) {
        toDo[taskIndex].done = true;
      }
      return {...state, toDo};
    }
    case 'UNCHECK_TASK': {
      const [...toDo] = state.toDo;
      const taskIndex = toDo.findIndex(item => item.id === action.payload);
      if (taskIndex > -1) {
        toDo[taskIndex].done = false;
      }
      return {...state, toDo};
    }
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
});
