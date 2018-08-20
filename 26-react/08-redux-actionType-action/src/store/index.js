//我不处理数据，我只是数据的搬运工
import { createStore } from 'redux';
import reducer from './reducer.js'
const store =createStore(reducer);
export default store;