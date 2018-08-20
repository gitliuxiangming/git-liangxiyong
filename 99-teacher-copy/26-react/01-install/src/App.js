/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 09:13:06
*/
import React,{ Component } from 'react';

//定义组件
//必须继承React.Component
class App extends Component{
	//必须有一个render方法
	render(){
		return(
			<h1>Hello word</h1>
		)
	}
}

//导出组件 ==  module.exports = App
export default App;