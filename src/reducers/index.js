import { combineReducers } from 'redux';

export function test1(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function test2(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ test1, test2});
