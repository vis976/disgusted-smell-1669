import * as types from "./actionType"

const intialState={
    articles:[],
    error:"",
    loading:false
}

const reducer =(state=intialState, action)=>{
    const {type, payload}=action;

    switch(type){
        case types.FETCH_DATA_REQUEST:
        return{
            ...state,
            error:"",
            loading:true
        }
      case types.FETCH_DATA_SUCCESS:
        return{
            ...state,
            error:"",
            articles:payload,
            loading:false
        }

        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:"",
                loading:false
            }

            default :
            return state
    }
}

export default reducer