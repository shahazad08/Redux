import { INCREMENT_COUNT, DECREMENT_COUNT, OPEN_MENU, CLOSE_MENU, CLOSE_PROFILE, OPEN_PROFILE } from "../constants/actionTypes";
export default (state={
    count:0,
    open:false,
    profile_open:false
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
        case OPEN_MENU:
        return{
            ...state,
            open:true
        }
        case CLOSE_MENU:
        return{
            ...state,
            open:false
        }
        case OPEN_PROFILE:
        return{
            ...state,
            profile_open:true
        }
        case CLOSE_PROFILE:
        return{
            ...state,
            profile_open:false
        }
        default:
        return state
    }
}