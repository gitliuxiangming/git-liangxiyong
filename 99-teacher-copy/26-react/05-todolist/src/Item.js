/*
* @Author: TomChen
* @Date:   2018-08-17 15:14:29
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-17 16:57:49
*/
import React,{ Component } from 'react';


class Item extends Component{
	
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this)
	}
	
	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index);
	}

	render(){
		const { content } = this.props;
		return (
			<li onClick={this.handleDelete}>
				{content}
			</li>
		)
	}
}

export default Item;