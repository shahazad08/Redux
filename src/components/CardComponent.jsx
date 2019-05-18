import React, {Component} from 'react';
import { Card } from '@material-ui/core';
import newStyle from '../Style.less';
class CardLayout extends Component{
    render(){
        return(
            <Card>
                <div className={newStyle.viewcard}>
                <h1>Card Component</h1>
                <div className={newStyle.imgview}>
                <p>This is my griv view image,<br></br>
                     I hop u like it</p>
                <img src={require('../../assests/view.svg')}></img>
                </div>
                </div>
            </Card>
            
        );
    }
}export default CardLayout;