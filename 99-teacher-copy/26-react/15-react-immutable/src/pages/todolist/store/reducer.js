/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-21 17:01:05
*/
import  * as types from './actionTypes.js'
import { fromJS } from 'immutable'

//用fromJS包装一个immutable对象
const defaultState = fromJS({
	value:'',
	list:[]
})

export default (state=defaultState,action)=>{
	if(action.type == types.CHANGE_VALUE){
		// console.log(state);
		/*
		const newState = JSON.parse(JSON.stringify(state));

		newState.value = action.payload; 

		return newState
		*/

		return state.set('value',action.payload);

	}
	if(action.type == types.LOAD_INIT_DATA){
		/*
		const newState = JSON.parse(JSON.stringify(state));

		newState.list = action.payload; 

		return newState
		*/
		return state.set('list',action.payload);
	}	
	if(action.type == types.ADD_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
		*/
		const newList = [...state.get('list'),state.get('value')];
		return state.merge({
			list:newList,
			value:''
		})
	}

	if(action.type == types.DELETE_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
		*/
		const newList = [...state.get('list')];
		newList.splice(action.payload,1);
		return state.set('list',newList);
	}
	return state;
}