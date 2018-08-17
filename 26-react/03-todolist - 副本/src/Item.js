import React ,{Component,Fragment}from 'react';
class Item extends Component{

	handleDelete(index){
		this.props.handleDelete(this.props.index)
	}
	
	render(){
		
		return	(
					<li onClick={this.handleDelete.bind(this)}>
						{this.props.content}
					</li>
				)
			
	}
};
export default Item;