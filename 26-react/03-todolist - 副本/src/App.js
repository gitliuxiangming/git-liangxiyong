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
	}
	btnClick(){
		
		this.setState({
			list:[...this.state.list,this.state.value],
			value:'',
		})
		console.log(this.state);
	};
	inputChange(e){
		this.setState({
			value:e.target.value
		})
	};
	
	handleDelete(index){
		var list = [...this.state.list]
		list.splice(index,1)
		this.setState({
			list:list
		})
	}
	

	render() {
		return (
			<Fragment>
			<div className="box">
				<input value={this.state.value} onChange={this.inputChange.bind(this)} />
				<button onClick={this.btnClick.bind(this)} >新增</button>
				
					<ul>{
							this.state.list.map((item,index)=>{
								return (
											<Item 
												content={item} 
												key={index} 
												index={index}
												handleDelete={this.handleDelete.bind(this)}
											/>
										)
							})}
					</ul>
				
			</div>
			</Fragment>
		);
	}
}

export default App;
