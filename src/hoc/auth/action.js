



import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../actionType";
export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = ()=>({
    type: LOGIN_FAILURE
});



