import React ,{Component} from 'react';
import { connect } from 'react-redux';
import { INCREMENT_COUNT, DECREMENT_COUNT } from '../constants/actionTypes';
import appheader from './appheader';
import AppHeader from './appheader';
import GridLayout from './GridLayout';
import CardLayout from './CardComponent';
import newStyle from '../Style.less';

const mapDispatchToProps=dispatch=>({
    increment_count:()=>dispatch({
        type:INCREMENT_COUNT
    }),
    decrement_count:()=>dispatch({
        type:DECREMENT_COUNT
    })
})
function mapStateToProps(state){
    console.log("in mafsfdsf====----"+state.Displaypage)
    return {
        count:state.Displaypage
    }
}
class Displaypage extends Component{
    constructor(props){
        super(props);

    }
increment_count(){
    this.props.increment_count()
}
decrement_count(){
    this.props.decrement_count()
}
    
    render(){
        console.log("cipooh---"+this.props.count.count);        
        return(
            <div >
                <AppHeader/>
                <div className={newStyle.maindivs}>
                <button onClick={()=>this.increment_count()}>Counter_Increment</button>
                <div>{this.props.count.count}</div>
                <button onClick={()=>this.decrement_count()}>Counter_Decrement</button>
                {/* <GridLayout/> */}
                <div className={newStyle.cards}>
                <CardLayout/>
                
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>
                <CardLayout/>

                </div>
               
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Displaypage)