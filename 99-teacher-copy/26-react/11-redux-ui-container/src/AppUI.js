/*
* @Author: TomChen
* @Date:   2018-08-20 15:40:23
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 15:55:26
*/
import React,{ Component } from 'react';
import { Input,Button,Row,Col,List } from 'antd';

//只负责UI展示的组件- UI组件
//如果一个组件只有一个render方法的话,这个组件也叫做无状态组件
//无状态组件可以只写一个方法
/*
class AppUI extends Component{
	render(){
		return (
			<div className="App">
			    <Row>
			      <Col span={18} >
			      	<Input 
			      		value={this.props.value} 
			      		onChange={this.props.handleChange}
			      	/> 
			      </Col>
			      <Col span={6} >
			      	<Button type="primary" onClick={this.props.handleAdd}>
			      		增加
			      	</Button>
			      </Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
			    />			    			
			</div>				
		);
	}
}
*/
const AppUI = (props)=> {
	return (
		<div className="App">
		    <Row>
		      <Col span={18} >
		      	<Input 
		      		value={props.value} 
		      		onChange={props.handleChange}
		      	/> 
		      </Col>
		      <Col span={6} >
		      	<Button type="primary" onClick={props.handleAdd}>
		      		增加
		      	</Button>
		      </Col>
		    </Row>
		    <List
		      style={{ marginTop: 10 }}
		      bordered
		      dataSource={props.list}
		      renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>)}
		    />			    			
		</div>				
	);
}
export default AppUI;