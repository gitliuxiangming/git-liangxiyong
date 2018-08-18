import React ,{Component,Fragment}from 'react';
import propTypes  from 'prop-types';
class Item extends Component{

	constructor(props){
		super(props);
		this.handleDelete=this.handleDelete.bind(this)
	}
	static getDerivedStateFromProps(nextProps,prevState){
		return{
			list:['aa','bb']
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('跟新组件在render之前:：',shouldComponentUpdate,nextProps,nextState);
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('在render之后更新页面之前执行:：',getSnapshotBeforeUpdate,prevProps,prevState);
		return 123;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('完成更新后执行:：',componentDidUpdate,prevProps,prevState,snapshot);
	}
	componentWillUnmount(){
		console.log('完成拆装后执行:：',componentWillUnmount);
	}
	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index)
	}
	
	render(){
		const { content,test } = this.props;
		return	(
					<li onClick={this.handleDelete}>
						{content}
					</li>
				)
			
	}
};

Item.proptypes = {
	index:propTypes.number,
	content:propTypes.string.isRequired,
	handleDelete:propTypes.func			
}






export default Item;