// import { combineReducers } from 'redux';
//redux-immutable中的combineReducers方法成的store中的state数据是immutable格式的
import { combineReducers } from 'redux-immutable';
import { reducer as TodoListReducer } from '../pages/todolist/store'

export default combineReducers({ 
	todolist:TodoListReducer
});