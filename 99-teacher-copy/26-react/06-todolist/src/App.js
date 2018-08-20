/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-18 16:05:19
*/
import React,{ Component } from 'react';

import Item from './Item';
import Test from './Test';

import axios from 'axios';

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
			list:['aa']
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		console.log('App constructor....');
	}
	/*
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('App getDerivedStateFromProps',nextProps, prevState)
	
		return {
			list:['bb','cc']
		}
	
		if(prevState.value == 1){
			return {
				list:['111']
			}			
		}else{
			return {
				list:['bb','cc']
			}			
		}
	}
	*/
	/*
	shouldComponentUpdate(nextProps, nextState){
		console.log('App shouldComponentUpdate',nextProps, nextState)
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('App getSnapshotBeforeUpdate',prevProps, prevState)
		return 111;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('App componentDidUpdate',prevProps, prevState,snapshot)
	}
	componentDidMount(){
		console.log('App componentDidMount')
	}
	*/
	componentDidMount(){
		//发送ajax请求
		axios
		.get('http://127.0.0.1:3000/api/getData')
		.then((data)=>{
			// console.log(data);
			this.setState({
				list:data.data
			})
		})
		.catch((e)=>{
			console.log('err:::',e);
		})
	}
	handleAdd(){
		// setState方法是一个异步方法
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		});
		
	}
	handleChange(e){
		// console.log(this.input)
		// const value = e.target.value;
		const value = this.input.value;
		this.setState((preState)=>({
			value
		}));

	}

	handleDelete(index){

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
		console.log('App render...')
		//return 只能返回一个
		return(
			<div className="App">
				<input 
					value={this.state.value} 
					onChange={this.handleChange} 
					ref={(input)=>{
						// console.log(input)
						this.input = input
					}}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul ref={(ul)=>{this.ul = ul}}>
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