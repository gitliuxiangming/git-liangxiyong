/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 14:54:48
*/
import React,{ Component,Fragment } from 'react';

//引入css
import './App.css';

//定义组件
//必须继承React.Component
class App extends Component{
	
	constructor(props){
		super(props);
		//初始化state,state代表当前页面中的数据
		this.state = {
			value :'',
			list:[]
		}
	}

	handleAdd(){
		// console.log('add..');
		// console.log(this.state.value);
		// this.state.list.push(this.state.value)
		this.setState({
			list:[...this.state.list,this.state.value],
			value:''
		})
	}
	handleChange(e){
		// console.log(e.target.value);
		// console.log(this)
		// console.log(this.state);
		// this.state.value = e.target.value;
		this.setState({
			value:e.target.value
		})
	}
	handleDelete(index){
		//把this.state.list里面的对应的值删掉
		// console.log(index)
		const list = [...this.state.list];
		list.splice(index,1)
		//console.log(list.splice(index,1))
		//console.log(list)
		this.setState({
			list:list
		})
		
	}
	//必须有一个render方法
	//JSX语法
	render(){
		//return 只能返回一个
		return(
			//Fragment不会生成新的标签
			/*
			<Fragment>
				<input />
				<button>新增</button>
			</Fragment>

			*/
			/*
			JSX语法中的行间样式
			<div style={{background:'red'}}>
				<input />
				<button>新增</button>
			</div>
			*/
			<div className="box">
				{/*我是JSX多行注释*/}
				{
					//我是JSX单行注释
				}
				<input value={this.state.value} onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleAdd.bind(this)}>新增</button>
				<ul>
					{
						this.state.list.map((item,index)=>{
							return(
								<li 
								key={index} 
								onClick={this.handleDelete.bind(this,index)}
								>
									{item}
								</li>
							)
						})
					}
				</ul>
			</div>				
		)
	}
}

//导出组件 ==  module.exports = App
export default App;