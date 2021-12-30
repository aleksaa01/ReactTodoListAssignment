import * as todoActions from '../actions/todoActions';


const addObj = (name, description, status) => {
  return { name, description, status };
}

// initial state for easier testing
const initialState = {
  todos: [
    addObj('Initial State', "Some initial state for easier testing.", "open"),
    addObj('Todo Name 1', "Todo Description 1", "done"),
    addObj('Todo Name 2', "Todo Description 2", "done"),
    addObj('Todo Name 3', "Todo Description 3", "open"),
    addObj('Todo Name 4', "Todo Description 4", "open"),
  ]
};


export const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case todoActions.TODO_DELETE: {
      const index = action.payload.index;
      return {...state, todos: state.todos.filter((todo, idx) => idx !== index)};
    }
    case todoActions.TODO_CREATE: {
      const {name, description} = action.payload;
      const new_todos = state.todos.slice();
      new_todos.splice(0, 0, {name: name, description: description, status: 'open'});
      return {...state, todos: new_todos};
    }
    case todoActions.TODO_EDIT: {
      const {name, description, index} = action.payload;
      return {...state, todos: state.todos.map((todo, idx) => {
        if (idx === index) return {...todo, name: name, description: description};
        return todo;
      })};
    }
    case todoActions.TODO_DONE: {
      const index = action.payload.index;
      return {...state, todos: state.todos.map((todo, idx) => {
        if (idx === index) return {...todo, status: 'done'};
        return todo;
      })};
    }
    case todoActions.TODO_UNDO: {
      const index = action.payload.index;
      return {...state, todos: state.todos.map((todo, idx) => {
        if (idx === index) return {...todo, status: 'open'};
        return todo;
      })};
    }
    default: return state;
  }
}