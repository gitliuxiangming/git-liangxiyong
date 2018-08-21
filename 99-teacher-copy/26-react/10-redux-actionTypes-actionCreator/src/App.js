/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 15:02:26
*/
import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';

import store from './store';

import { chageValueAction,addItemAction,deleteItemAction } from './store/actionCreator.js'

//引入css
import './App.css';


class App extends Component{
	constructor(props){
		super(props);
		/*
		this.state = {
			value:'hello',
			list:['aaa','bbb']
		}
		*/
		//从store中获取初始化数据
		this.state = store.getState();
		
		//当store里面的state发送改变时执行subscribe里面的函数
		store.subscribe(()=>{
			this.setState(store.getState())
		});
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleChange(e){
		const action = chageValueAction(e.target.value)
		store.dispatch(action)
	}
	handleAdd(){
		const action = addItemAction();
		store.dispatch(action);
	}
	handleDelete(index){
		const action = deleteItemAction(index);
		store.dispatch(action)
	}
	render(){
		//return 只能返回一个
		return(
			<div className="App">
			    <Row>
			      <Col span={18} >
			      	<Input 
			      		value={this.state.value} 
			      		onChange={this.handleChange}
			      	/> 
			      </Col>
			      <Col span={6} >
			      	<Button type="primary" onClick={this.handleAdd}>
			      		增加
			      	</Button>
			      </Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
			    />			    			
			</div>				
		)
	}
}
export default App;