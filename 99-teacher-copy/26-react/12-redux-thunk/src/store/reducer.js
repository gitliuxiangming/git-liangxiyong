/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 16:29:23
*/
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'
const defaultState = {
	value:'',
	list:[]
}

export default (state=defaultState,action)=>{
	if(action.type == CHANGE_VALUE){

		const newState = JSON.parse(JSON.stringify(state));

		newState.value = action.payload; 

		return newState
	}
	if(action.type == LOAD_INIT_DATA){

		const newState = JSON.parse(JSON.stringify(state));

		newState.list = action.payload; 

		return newState
	}	
	if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
	}

	if(action.type == DELETE_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
}