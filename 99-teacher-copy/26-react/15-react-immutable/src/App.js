/*
* @Author: TomChen
* @Date:   2018-08-16 17:14:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-21 14:46:09
*/
import React,{ Component } from 'react';
import TodoList from './pages/todolist'
//引入css
import './App.css';

class App extends Component{

	render(){
		return(
			<div className="App">
			   	<TodoList />		
			</div>				
		)
	}
}

export default App;