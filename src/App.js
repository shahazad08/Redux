import {Provider} from 'react-redux';
import store from './store';
import Displaypage from './components/Displaypage';
import React ,{Component} from 'react';
import Login from './components/Login';
import AppRouter from './Approuter';
class App extends Component{
    render(){
        return(
            <Provider store={store} >
            <AppRouter />
            </Provider>
        )
    }
}
export default App