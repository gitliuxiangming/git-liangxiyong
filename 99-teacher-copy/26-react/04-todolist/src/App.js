/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 16:13:03
*/
import React,{ Component } from 'react';

import Item from './Item';

//引入css
import './App.css';

//定义组件
//必须继承React.Component
class App extends Component{
	
	constructor(props){
		super(props);
		//初始化state,state代表当前页面中的数据
		this.state = {
			value :'',
			list:['11','22']
		}
	}

	handleAdd(){
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
	}
	handleChange(e){
		this.setState({
			value:e.target.value
		})
	}
	/*
	handleDelete(index){
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	*/
	handleDelete(index){
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState({
			list:list
		})		
	}
	//必须有一个render方法
	//JSX语法
	render(){
		//return 只能返回一个
		return(
			<div className="box">
				<input value={this.state.value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return(
								<Item 
									key={index} 
									content={item} 
									index={index}
									handleDelete={this.handleDelete.bind(this)}
								/>	
							)
						})
					}
				</ul>
			</div>				
		)
	}
}
//导出组件 ==  module.exports = App
export default App;