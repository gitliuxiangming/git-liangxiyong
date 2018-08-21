import { combineReducers } from 'redux';
import { reducer as TodoListReducer } from '../pages/todolist/store'

export default combineReducers({ todolist:TodoListReducer });