import { CHANGE_VALUE,ADD_TIEM,DELETE_ITEM } from './action-Types.js';

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