import * as types from './createTypes.js';

import axios from 'axios';

export const ChangeValueAction = (payload)=>{
	return {
		type:types.CHANGE_VALUE,
		payload
	}
}
export const AddItemAction = ()=>{
	return {
		type:types.ADD_TIEM,
	}
}

export const DeleteItemAction = (payload)=>{
	return {
		type:types.DELETE_ITEM,
		payload
	}
}
export const GetInitDataAction = (payload)=>{
	return {
		type:types.GET_INIT_DATA,
		payload
	}
}
export const GetInitDataActionFn = (payload)=>{
	return (dispatch)=>{
		axios
		.get('http://127.0.0.1:8060/')
		.then((data)=>{
			const action = GetInitDataAction(data.data);
			dispatch(action);
		})
	}
}
