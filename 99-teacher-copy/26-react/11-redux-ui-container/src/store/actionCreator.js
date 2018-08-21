/*
* @Author: TomChen
* @Date:   2018-08-20 14:57:01
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 15:01:40
*/
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM  } from './actionTypes.js'
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