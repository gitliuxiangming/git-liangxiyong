import { CHANGE_VALUE,ADD_TIEM,DELETE_ITEM,GET_INIT_DATA,GET_INIT_DATA_FN } from './action-Types.js';
import axios from 'axios';

export const ChangeValueAction = (payload)=>{
	return {
		type:CHANGE_VALUE,
		payload
	}
}
export const AddItemAction = ()=>{
	return {
		type:ADD_TIEM,
	}
}

export const DeleteItemAction = (payload)=>{
	return {
		type:DELETE_ITEM,
		payload
	}
}
export const GetInitDataAction = (payload)=>{
	return {
		type:GET_INIT_DATA,
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




