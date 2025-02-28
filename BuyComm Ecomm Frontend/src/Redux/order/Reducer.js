import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID__FAILURE, GET_ORDER_BY_ID__REQUEST, GET_ORDER_BY_ID__SUCCESS } from "./ActionType";


const initialState={
    orders:[],
    order:null,
    error:null,
    loading:false
}

export const orderReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return{...state,loading:true,error:null};
    
        case CREATE_ORDER_SUCCESS:
            return{...state,loading:false,success:true,order:action.payload,error:null};
    
        case CREATE_ORDER_FAILURE:
            return{...state,loading:false,error:action.payload};
    
        case GET_ORDER_BY_ID__REQUEST:
            return{...state,loading:false,error:null};
    
        case GET_ORDER_BY_ID__SUCCESS:
            return{...state,loading:false,error:null,order:action.payload};
    
        case GET_ORDER_BY_ID__FAILURE:
            return{...state,loading:false,error:action.payload};
    
        default:
            return state;
    }
}



