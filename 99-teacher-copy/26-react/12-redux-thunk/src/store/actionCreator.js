/*
* @Author: TomChen
* @Date:   2018-08-20 14:57:01
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 17:09:15
*/
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,LOAD_INIT_DATA  } from './actionTypes.js'
import axios from 'axios';
export const chageValueAction = (payload)=>{
	return {
		type:CHANGE_VALUE,
		payload
	}
}
export const addItemAction = ()=>{
	return {
		type:ADD_ITEM
	}
}
export const deleteItemAction = (payload)=>{
	return {
		type:DELETE_ITEM,
		payload
	}
}
export const loadInitDataAction = (payload)=>{
	return {
		type:LOAD_INIT_DATA,
		payload
	}
}

export const getInitDataAction = ()=>{
	return (dispatch)=>{
		axios
		.get('http://127.0.0.1:3000/')
		.then((data)=>{
			const action = loadInitDataAction(data.data);
			dispatch(action);
		})
	}
}
