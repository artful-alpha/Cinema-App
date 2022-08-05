 
const initialState = {modal: false};

 
export default function modalReducer(state=initialState, action) {
    switch (action.type){
        case "modal":
            return {...state, modal : action.payload}
        default :
        return state
    } 
}

 
