/*
* @Author: TomChen
* @Date:   2018-08-17 15:14:29
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-18 15:49:08
*/
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component{
	
	constructor(props){
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this)
		console.log('Item constructor....')
	}
	/*
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('Item getDerivedStateFromProps',nextProps, prevState)
		return {};
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('Item shouldComponentUpdate',nextProps, nextState)
		return true;
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('Item getSnapshotBeforeUpdate',prevProps, prevState)
		return 111;
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('Item componentDidUpdate',prevProps, prevState,snapshot)
	}
	componentDidMount(){
		console.log('Item componentDidMount')
	}	
	componentWillUnmount(){
		console.log('Item componentWillUnmount')
	}
	*/
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.content != this.props.content){
			return true;
		}else{
			return false;
		}
		
	}
	handleDelete(){
		const { handleDelete,index } = this.props;
		handleDelete(index);
	}

	render(){
		console.log('Item render...')
		const { content,test } = this.props;
		return (
			<li onClick={this.handleDelete}>
				{content}
			</li>
		)
	}
}

Item.propTypes = {
	index:PropTypes.number,
	content:PropTypes.string.isRequired,
	handleDelete:PropTypes.func.isRequired,
}

export default Item;