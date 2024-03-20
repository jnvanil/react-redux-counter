import { INCREMENT, DECREMENT, RESET } from "./actions.types";
const initialState = {
 amount: 0,
 name: "React" 
}

const counter = (state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
             amount :action.count 
            }
    };
    case DECREMENT:
        return {
         amount :action.count 
        };
    case RESET:
        return {
         amount :0            
        }
        default:
            return state
}
export default counter;