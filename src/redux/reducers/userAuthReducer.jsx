import { logining } from "../action/setLogining";
const initialState = {auth: false};

 
export default function userAuthReducer(state=initialState, action) {
    switch (action.type){
        case logining:
            return {...state, auth : action.payload}
        default :
        return state
    } 
}

 
