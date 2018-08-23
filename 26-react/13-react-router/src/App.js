// import React, { Component } from 'react';
import React, { Component } from 'react';
import Todolist from './pages/todolist/TodoList.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
// import store from './store';
import './App.css';

class A extends Component {
	render() {
		return (
			<div className="box">
				<p>
					asdfasdf
					{this.props.match.params.id}
				</p>
			</div>
		)
	}
	/*render() {
		return (
			<div className="box">
				<p>
					hausfgf
				</p>
				
				<Switch>
					<Route path="/a" component={A} />
					<Route path="/a/:id" component={A} />
				</Switch>
			</div>
		)
	}*/
}

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			isLogin:true
		}
	}
	render() {
		
		const ProtectRoute = ({ component: Component, ...rest })=>(
			<Route 
				{...rest} 
				render={props=>(
					this.state.isLogin
					?(<Component {...props} />)
					:(<Redirect to='/login' />)
				)}
			/>
		)
		
		return (
			<Router>
				<div className="box">
					<ul>
						<li>
							<Link to="/todolist">Todolist</Link>
						</li>
						<li>
							<Link to="/a">A</Link>
						</li>
					
						<li>
							<Link to="/b">b-sub</Link>
						</li>
					</ul>

					<Route path="/todolist" component={Todolist} />
					<ProtectRoute  path="/a" component={A} />
					<Route path="/b" render={(route)=>(<h1>b-param-{route.match.params.id}</h1>)} />
					<Route path='/login' render={()=>(<p>component login for A</p>)} />
				</div>
			</Router>
		);
	}	
}

export default App;
