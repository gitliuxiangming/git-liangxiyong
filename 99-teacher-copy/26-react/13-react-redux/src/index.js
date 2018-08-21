/*
* @Author: TomChen
* @Date:   2018-08-16 16:55:36
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-21 09:51:14
*/
//用React的语法解析文件
import React from 'react'; // const React = require('react')

//ReactDOM就是用来把组件挂载到DOM节点上
import ReactDOM from 'react-dom';

import store from './store';

//Provider用来指定所有子组件的store
import { Provider } from 'react-redux';

//注意:自己定义的组件必须首字母大写
import App from './App'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)