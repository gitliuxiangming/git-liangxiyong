import React ,{Component,Fragment}from 'react';
import { DatePicker,Row, Col, Input ,Button,List} from 'antd';
import store from './store/index.js';
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
	}
	handleChange(e){
		const action = {
			type:'change_value',
			payload:e.target.value
		}
		//发送给store的数据
		store.dispatch(action);
	}

	handleAdd(){
		const action = {
			type:'add_item',
		}
		//发送给store的数据
		store.dispatch(action);
	}

	handleDelete(index){
		const action = {
			type:'delete_item',
			index:index
		}
		//发送给store的数据
		store.dispatch(action);
	}

	render(){

		return(
			
			<Fragment>
				<DatePicker/>
				<Row>
			      <Col span={12}>
			     	 <Input
			     	 	 value={this.state.value}
			     	 	 onChange={this.handleChange}
			     	 />
			      </Col>
			      <Col span={12}>
			      	<Button 
			      		type="primary"
			      		onClick = {this.handleAdd}
			      	>增加</Button>
			      </Col>
			    </Row>
				  <div>
				    <Col span={12}><List
				      bordered
				      dataSource={this.state.list}
				      renderItem={(item,index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
				    />
				    </Col>
				  </div>
				  ,
			</Fragment>
			)
	}

};
export default App;