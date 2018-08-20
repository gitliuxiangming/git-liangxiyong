import React,{ Component } from 'react';
import { DatePicker,Row, Col, Input ,Button,List} from 'antd';

/*
class AppUI extends Component{
	render(){
		return(
			<div className='box'>
				<DatePicker/>
				<Row>
			      <Col span={12}>
			     	 <Input
			     	 	 value={this.props.value}
			     	 	 onChange={this.props.handleChange}
			     	 />
			      </Col>
			      <Col span={12}>
			      	<Button 
			      		type="primary"
			      		onClick = {this.props.handleAdd}
			      	>增加</Button>
			      </Col>
			    </Row>
				  <div>
				    <Col span={12}><List
				      bordered
				      dataSource={this.props.list}
				      renderItem={(item,index) => (<List.Item onClick={()=>{this.props.handleDelete(index)}}>{item}</List.Item>)}
				    />
				    </Col>
				  </div>
			</div>
		)
	}
}
*/
const AppUI = (props)=>{
	return(
			<div className='box'>
				<DatePicker/>
				<Row>
			      <Col span={12}>
			     	 <Input
			     	 	 value={props.value}
			     	 	 onChange={props.handleChange}
			     	 />
			      </Col>
			      <Col span={12}>
			      	<Button 
			      		type="primary"
			      		onClick = {props.handleAdd}
			      	>增加</Button>
			      </Col>
			    </Row>
				  <div>
				    <Col span={12}><List
				      bordered
				      dataSource={props.list}
				      renderItem={(item,index) => (<List.Item onClick={()=>{props.handleDelete(index)}}>{item}</List.Item>)}
				    />
				    </Col>
				  </div>
			</div>
		)
}

export default AppUI;