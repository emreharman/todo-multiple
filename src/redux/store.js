import { createStore,combineReducers } from "redux";
import loginReducer from "./reducer/loginReducer";
import usersReducer from "./reducer/usersReducer";

const rootReducer=combineReducers({
    loginState: loginReducer,
    usersState: usersReducer
})

const store=createStore(rootReducer)

export default store