import React, { Component,Fragment } from 'react';
import './App.css';
import Item from './Item.js';
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
		var value = e.target.value;
		this.setState(()=>({
			value
		}))
	};
	
	handleDelete(index){
		// var list = [...this.state.list]
		// list.splice(index,1)
		// this.setState({
		// 	list:list
		// })
		this.setState((preState)=>{
			var list = [...preState.list]
			list.splice(index,1)
			return {
				list
			}
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
				<input value={this.state.value} onChange={this.inputChange} />
				<button onClick={this.btnClick} >新增</button>
				
					<ul>{
						this.getItem()
					}
					</ul>
				
			</div>
			</Fragment>
		)
	}
}

export default App;
