export const ADD_TODO = 'ADD_TODO';
export const SET_TODO_AS_COMPLETE = 'SET_TODO_AS_COMPLETE';

export const addTodo = name => ({
  type: ADD_TODO,
  payload: {
    name
  }
});

export const setTodoAsComplete = index => ({
  type: SET_TODO_AS_COMPLETE,
  payload: {
    index
  }
});

