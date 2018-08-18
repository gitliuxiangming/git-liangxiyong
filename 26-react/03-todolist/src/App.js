import React, { Component,Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Item from './Item.js';
import Test from './Test.js';
class App extends Component {
	constructor(options){
		super(options);
		this.state={
			value:'',
			list:['aaa','bbb']
		}
		this.handleDelete=this.handleDelete.bind(this)
		this.inputChange=this.inputChange.bind(this)
		this.btnClick=this.btnClick.bind(this)
	}
	btnClick(){
		/*
		this.setState(()=>{
			list:[...this.state.list,this.state.value],
			value:'',
		})
		*/
		this.setState((preState)=>({
			list:[...preState.list,preState.value],
			value:'',
		}))
	};
	inputChange(e){
		var value = this.input.value;
		// var value = e.target.value;
		this.setState(()=>({
			value
		}))
	};
	componentDidMount(){
		axios
		.get('http://127.0.0.1:3000')
		.then((data)=>{
			this.setState=(()=>{
				list:data.data
			})
		})
		.catch((e)=>{
			console.log(e)
		})
	}
	/*
	static getDerivedStateFromProps(nextProps,prevState){
		return{
			list:['aa','bb']
		}
	}
	*/
	shouldComponentUpdate(nextProps, nextState){
		console.log('跟新组件在render之前:：',shouldComponentUpdate,nextProps,nextState);
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('在render之后更新页面之前执行:：',getSnapshotBeforeUpdate,prevProps,prevState);
		return 123;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('完成更新后执行:：',componentDidUpdate,prevProps,prevState,snapshot);
	}
	componentWillUnmount(){
		console.log('完成拆装后执行:：',componentWillUnmount);
	}
	handleDelete(index){
		// var list = [...this.state.list]
		// list.splice(index,1)
		// this.setState({
		// 	list:list
		// })
		this.setState((preState)=>{
			var list = [...preState.list]
			list.splice(index,1)
			return{
					list
				}
		},(li)=>{
			console.log(li);
		})
	}
	getItem(){
		return this.state.list.map((item,index)=>{
					return (
								<Item 
									content={item} 
									key={index} 
									index={index}
									handleDelete={this.handleDelete}
								/>
							)
				})
	}

	render(){
		return (
			<Fragment>
			<div className="box">
				<input value={this.state.value} onChange={this.inputChange} ref={(input)=>{this.input=input}}/>
				<button onClick={this.btnClick} >新增</button>
				
					<ul ref={(ul)=>{this.ul=ul}}>{
						this.getItem()
					}
					</ul>
				
			</div>
			</Fragment>
		)
	}
}

export default App;
