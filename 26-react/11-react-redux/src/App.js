import React ,{Component}from 'react';
import { DatePicker,Row, Col, Input ,Button,List} from 'antd';
import { connect } from 'react-redux';
import './App.css'
import { ChangeValueAction,AddItemAction,DeleteItemAction,GetInitDataAction } from './store/actionCreator.js';
class App extends Component{
	ComponentDidMount(){
		this.props.hangleInit();
	}
	render() {
		// console.log('render')
		return (
			<div className="box">
				 <Row>
					<Col span={18} >
						<Input
							 value={this.props.value}
							 onChange={this.props.handleChange}
						/> 
					</Col>
					<Col span={6} ><Button type="primary" onClick={this.props.hangleAdd}>增加</Button></Col>
				</Row>
				<List
					style={{ marginTop: 10 }}
					bordered
					dataSource={this.props.list}
					renderItem={(item,index) => (<List.Item onClick={()=>{this.props.hangdleDelete(index)}}>{item}</List.Item>)}
				/>
			</div>
		);
	}
}
//从store上获取属性，数据
const mapStateToProps = (state)=>{
	return {
		value:state.value,
		list:state.list
	}
}
//把方法映射到store上
const mapDispatchToProps = (dispatch)=>{
	return {
		handleChange:(e)=>{
			const action = ChangeValueAction(e.target.value)
			dispatch(action)
		},
		hangleAdd:(e)=>{
			const action = AddItemAction()
			dispatch(action)
		},
		hangdleDelete:(index)=>{
			const action = DeleteItemAction(index)
			dispatch(action)
		},
		hangleInit:()=>{
			const action = GetInitDataAction()
			dispatch(action)
		}
	}
}

//用connect方法把组件和store连接起来
// export default connect(null,null)(App);
export default connect(mapStateToProps,mapDispatchToProps)(App);
