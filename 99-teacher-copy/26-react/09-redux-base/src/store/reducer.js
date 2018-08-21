/*
* @Author: TomChen
* @Date:   2018-08-20 09:18:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 14:43:43
*/

const defaultState = {
	value:'hello!!!',
	list:["aaa!!!","bbb!!!"]
}

//reducer是一个函数,注意点:
//1.并且reducer是一个纯函数(给定固定的输入,就会有固定的输出,并且不能改变参数)
//2.reducer负责处理逻辑但不改变数据,数据的改变是由store来负责
//3.action中的type在整个应用中必须唯一
export default (state=defaultState,action)=>{
	if(action.type == 'change_value'){
		//state.value = action.payload//错误的写法

		//生成新的state
		//深copy当前state
		const newState = JSON.parse(JSON.stringify(state));

		/* 
		纯函数中不能有系统时间,随机数等不固定的值,以下是错误的写法
		newState.value = new Date()
		newState.value = Math.random()
		*/
		newState.value = action.payload; 

		return newState
	}
	if(action.type == 'add_item'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(state.value);
		newState.value = '';
		return newState;
	}

	if(action.type == 'delete_item'){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	return state;
}