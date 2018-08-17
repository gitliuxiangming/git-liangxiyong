import React ,{Component,Fragment}from 'react';
class Item extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)
	}

	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index)
	}
	
	render(){
		const { content } = this.props;
		return	(
					<li onClick={this.handleDelete}>
						{content}
					</li>
				)
			
	}
};
export default Item;