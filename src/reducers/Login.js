import { INPUT_EMAIL,INPUT_PASSWORD } from "../constants/actionTypes";


export default (state={
    count:0,
    email:"",
    password:""
},action)=>{
    switch(action.type){
        case INPUT_EMAIL:
        return{
            ...state,
            email:action.payload
        }
        case INPUT_PASSWORD:
        return{
            ...state,
            password:action.payload
        }
        default:
        return state
    }
}