import React, { Component,Fragment } from 'react';
import './App.css';
import { DatePicker } from 'antd';
class App extends Component {
	
	render() {
		return(
				<Fragment>	
				 <DatePicker onChange={onChange} />
				</Fragment>
			)
	}
}

export default App;
