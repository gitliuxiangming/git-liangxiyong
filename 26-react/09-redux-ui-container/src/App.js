import React ,{Component,Fragment}from 'react';
import { DatePicker,Row, Col, Input ,Button,List} from 'antd';
import store from './store/index.js';
import { ChangeValueAction,AddItemAction,DeleteItemAction } from './store/actionCreator.js';
import AppUI from './AppUI.js'
class App extends Component{

	constructor(props){
		super(props);
		//第一次初始化数据
		this.state=store.getState();
		//接受从store发来的数据
		store.subscribe(()=>{
			const state = this.setState(store.getState());
		})
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleChange(e){
		const action=ChangeValueAction(e.target.value);
		//发送给store的数据
		store.dispatch(action);
	}

	handleAdd(){
		const action=AddItemAction();
		//发送给store的数据
		store.dispatch(action);
	}

	handleDelete(index){
		const action=DeleteItemAction(index);
	
		//发送给store的数据
		store.dispatch(action);
	}

	render(){

		return(
			<AppUI 
				value={this.state.value}
				handleChange={this.handleChange}
				handleAdd={this.handleAdd}
				handleDelete={this.handleDelete}
				list={this.state.list}

			/>
		)
	}

}
export default App;