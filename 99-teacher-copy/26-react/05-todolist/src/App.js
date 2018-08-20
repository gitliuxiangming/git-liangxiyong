/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 17:02:00
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
			list:['aa','bb']
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleAdd(){
		/*
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
		*/
		/*
		this.setState(()=>{
			return {
				list:[...this.state.list,this.state.value],
				value:''
			}
		});
		*/
		/*
		this.setState(()=>({
				list:[...this.state.list,this.state.value],
				value:''
			})
		);
		*/
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:''
		}));				
	}
	handleChange(e){
		/*
		this.setState({
			value:e.target.value
		})
		*/
		const value = e.target.value;
		this.setState((preState)=>({
			value
		}));
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
		/*
		const list = [...this.state.list];
		list.splice(index,1)
		this.setState({
			list:list
		})	
		*/
		this.setState((preState)=>{
			const list = [...preState.list];
			list.splice(index,1)
			return {
				list
			}			
		})	
	}
	getItems(){
		return	this.state.list.map((item,index)=>{
					return(
						<Item 
							key={index} 
							content={item} 
							index={index}
							handleDelete={this.handleDelete}
						/>	
					)
				})
	}
	//必须有一个render方法
	//JSX语法
	render(){
		//return 只能返回一个
		return(
			<div className="App">
				<input value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>				
		)
	}
}
//导出组件 ==  module.exports = App
export default App;