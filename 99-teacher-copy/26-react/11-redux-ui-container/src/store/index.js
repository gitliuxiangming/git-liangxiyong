/*
* @Author: TomChen
* @Date:   2018-08-20 09:14:30
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-20 15:39:26
*/
import { createStore } from 'redux'
import reducer from './reducer.js'

const store = createStore(reducer);

export default store;