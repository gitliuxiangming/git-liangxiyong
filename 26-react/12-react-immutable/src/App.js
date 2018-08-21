import React ,{Component}from 'react';
import TodoList from './pages/todolist/TodoList.js'

class App extends Component{
	
	render() {
		return (
			<div className='App'>
				<TodoList />
			</div>
		);
	}
}


export default App;
