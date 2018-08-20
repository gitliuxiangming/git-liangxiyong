import React ,{Component,Fragment}from 'react';
import { DatePicker,Row, Col, Input ,Button,List} from 'antd';
import store from './store/index.js';
import { ChangeValueAction,AddItemAction,DeleteItemAction,GetInitDataAction,GetInitDataActionFn } from './store/actionCreator.js';
import AppUI from './AppUI.js'
import axios from 'axios';
class App extends Component{

	constructor(props){
		super(props);
		//第一次初始化数据
		this.state=store.getState();
		//接受从store发来的数据
		store.subscribe(()=>{
			this.setState(store.getState());
		})
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	componentDidMount(){
		/*
		axios
		.get('http://127.0.0.1:8060')
		.then((data)=>{
			const action=GetInitDataAction(data.data);
			//发送给store的数据
			store.dispatch(action);
		})
		.catch((e)=>{
			console.log(e);
		})
		*/
		const action=GetInitDataActionFn();
		//发送给store的数据
		store.dispatch(action);
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