/*
* @Author: TomChen
* @Date:   2018-08-21 14:55:31
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-21 15:09:00
*/
import { combineReducers } from 'redux';
import { reducer as todolistReducer } from '../pages/todolist/store'

export default combineReducers({
	todolist:todolistReducer
})