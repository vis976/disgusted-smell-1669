import * as types from "./actionType"
import Axios from "axios"

const FetchDataRequeste=(payload)=>{
    return {
        type:types.FETCH_DATA_REQUEST,
        payload
    }
}

const FetchDataSuccess=(payload)=>{
    return {
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}
const FetchDataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData=(payload)=>{
    return(dispatch)=>{
        dispatch(FetchDataRequeste())

        Axios.get("/articles",{
            params:{
                ...payload
            }
        }).then(res=>dispatch(FetchDataSuccess(res.data))).catch(e=>dispatch(FetchDataFailure(e.data)))

    }
}

export {fetchData}