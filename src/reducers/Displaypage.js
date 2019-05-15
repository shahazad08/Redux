import { INCREMENT_COUNT, DECREMENT_COUNT } from "../constants/actionTypes";

export default (state={
    count:0
},action)=>{
    switch(action.type){
        case INCREMENT_COUNT:
        return{
            ...state,
            count:state.count+1
        }
        case DECREMENT_COUNT:
        return{
            ...state,
            count:state.count-1
        }
        default:
        return state
    }
}