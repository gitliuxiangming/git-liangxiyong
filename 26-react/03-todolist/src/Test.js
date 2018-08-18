import React ,{Component,Fragment}from 'react';
import propTypes  from 'prop-types';
class Test extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)
	}

	// handleDelete(){
	// 	const { handleDelete,index } = this.props;
	// 	handleDelete(index)
	// }
	
	render(){
		const { content } = this.props;
		return	(
					<li onClick={this.handleDelete}>
						{content}
					</li>
				)
			
	}
};

Test.proptypes = {
	index:propTypes.number.isRequired,
	content:propTypes.string.isRequired,
	handleDelete:propTypes.func.isRequired
}





export default Test;