// import React, { Component } from 'react';
import React, { Component } from 'react';
import Todolist from './pages/todolist';
import Login from './pages/login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
// import store from './store';
import './App.css';


class App extends Component {
	
	render() {
		return (
			<Router>
				<div className="App">
					<Login />
				</div>
			</Router>
		);
	}	
}

export default App;
