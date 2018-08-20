/*
* @Author: TomChen
* @Date:   2018-08-17 15:14:29
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 16:11:48
*/
import React,{ Component } from 'react';


class Item extends Component{
	
	handleDelete(){
		// console.log(this.props.index)
		//console.log(this.props.data)
		//this.props.data.splice(this.props.index,1)
		//console.log(this.props.data)
		this.props.handleDelete(this.props.index);
	}

	render(){
		return (
			<li onClick={this.handleDelete.bind(this)}>
				{this.props.content}
			</li>
		)
	}
}

export default Item;