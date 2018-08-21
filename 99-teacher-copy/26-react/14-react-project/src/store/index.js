/*
* @Author: TomChen
* @Date:   2018-08-20 09:14:30
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-21 09:19:08
*/
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducer from './reducer.js'

const middleware = [thunk];

if(process.env.NODE_ENV != 'production'){
	const logger = createLogger({});
	middleware.push(logger);
}


const store = createStore(reducer,applyMiddleware(...middleware));

export default store;