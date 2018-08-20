/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-18 16:50:47
*/
import React,{ Component } from 'react';

import { Input,Button,Row,Col,List } from 'antd';

//引入css
import './App.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];


class App extends Component{
	
	render(){
		//return 只能返回一个
		return(
			<div className="App">
			    <Row>
			      <Col span={18} ><Input /> </Col>
			      <Col span={6} ><Button type="primary">增加</Button></Col>
			    </Row>
			    <List
			      style={{ marginTop: 10 }}
			      bordered
			      dataSource={data}
			      renderItem={item => (<List.Item>{item}</List.Item>)}
			    />			    			
			</div>				
		)
	}
}
export default App;