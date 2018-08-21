import * as types from './createTypes.js';
import { fromJS } from 'immutable'
//用fromJS包装一个immutable对象
const defaultState=fromJS({
	value:'',
	list:['aaa','bbb','ccc']
})
//1.reducer是一个函数,并且reducer是一个纯函数(给定固定的输入,就会偶固定的输出,并且不能改变参数)
//2.reducer负责处理逻辑但不改变数据，数据的改变是由store来负责的
//3.action中得到type在整个应用中必须唯一
export default (state=defaultState,action)=>{
	//判断发送过来的action的tpye，并作出相应的数据更改，最终返回数据
	if(action.type == types.CHANGE_VALUE){
		/*
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.value = action.payload;
		return Newstate
		*/
		return state.set('value',action.payload)
	}

	if(action.type == types.ADD_TIEM){
		/*
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.list.push(state.value);
		Newstate.value = ''
		return Newstate
		*/
		// const newlist = state.get('list').push(state.get('value'));
		const newlist = [...state.get('list'),state.get('value')]
		return state.merge({
			list:newlist,
			value:''
		}) ;
	}

	if(action.type == types.DELETE_ITEM){
		/*
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.list.splice(action.payload,1)
		return Newstate
		*/
		const newlist = [...state.get('list')];
		newlist.splice(action.payload,1);
		return state.set('list',newlist);
	}
	if(action.type == types.GET_INIT_DATA){
		/*
		const Newstate = JSON.parse(JSON.stringify(state));
		Newstate.list = action.payload
		return Newstate
		*/
		return state.set('value',action.payload) 
	}
	return state;
}