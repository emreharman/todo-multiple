import actionTypes from "../action/actionTypes";

const initialState={
    isLogin:false,
    username:"",
    role:""
}

const loginReducer=(state=initialState, action)=>{
    switch (action.type) {
        case actionTypes.USER_INFO_CHECK:
            return{
                isLogin:action.payload.isLogin,
                username: action.payload.username,
                role: action.payload.role
            }
        case actionTypes.LOGIN_SUCCESS:
            return{
                isLogin: true,
                username: action.payload.username,
                role: action.payload.role
            }
        case actionTypes.LOGOUT:
            return initialState
        default:
            return state
    }
}

export default loginReducer