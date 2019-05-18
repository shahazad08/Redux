import React,{Component} from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import Login from './components/Login';
import Displaypage from './components/Displaypage';

const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Route path='/' component={Login} exact={true}/>
        <Route path='/home' component={Displaypage}/>
    </div>
    </BrowserRouter>
);
export default AppRouter;

