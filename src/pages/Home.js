import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

import actionTypes from "../redux/action/actionTypes";

const Home=(props)=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loginState}=useSelector(state=>state)
    useEffect(()=>{
        if(loginState.isLogin === false){
            navigate("/login")
        }
    },[loginState])

    const handleLogout=()=>{
        dispatch({type:actionTypes.LOGOUT})
        window.localStorage.removeItem("loginState")
    }
    return(
        <div>
            <h1>Home page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home