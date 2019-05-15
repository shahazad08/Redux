import {Provider} from 'react-redux';
import store from './store';
import Displaypage from './components/Displaypage';
import React ,{Component} from 'react';
class App extends Component{
    render(){
        return(
            <Provider store={store} >
            <Displaypage />
            </Provider>
        )
    }
}
export default App