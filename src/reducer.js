import { combineReducers } from "redux";
import Displaypage from '../src/reducers/Displaypage' 
import Login from '../src/reducers/Login' 
import AppHeader from '../src/reducers/appheader' 
export default combineReducers({
Displaypage,
Login
})