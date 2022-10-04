import actionTypes from "../action/actionTypes";

const initialState={
    start:false,
    success:false,
    users:[],
    fail:false,
    error:""
}

const usersReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return{
                ...state,
                start:true
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return{
                ...state,
                start:false,
                success:true,
                users: action.payload
            }
        case actionTypes.FETCH_USERS_FAIL:
            return{
                ...state,
                start: false,
                fail:true,
                error: action.payload
            }
        default:
            return state
    }
}

export default usersReducer