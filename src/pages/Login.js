import React,{useState} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"

import actionTypes from "../redux/action/actionTypes";


const Login=(props)=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {usersState,loginState}=useSelector(state=>state)
    console.log(loginState)
    const [formValues,setFormValues]=useState({
        username:"",
        password:""
    })
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(!formValues.username || !formValues.password){
            alert("Username or password can't be empty.")
            return
        }
        const hasUser=usersState.users.find(item => item.username === formValues.username)
        if(!hasUser){
            alert("Can't find such a user")
            return
        }
        if(hasUser?.password !== formValues.password){
            alert("Wrong password")
            return
        }
        dispatch({type: actionTypes.LOGIN_SUCCESS,payload:{username:hasUser.username,role:hasUser.role}})
        window.localStorage.setItem("loginState",JSON.stringify({isLogin:true,username:hasUser.username,role:hasUser.role}))
        navigate("/")
    }
    return(
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" >Username</label>
                    <input onChange={(event)=>setFormValues({...formValues,username:event.target.value})} value={formValues.username} id="username" autoComplete="off"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>setFormValues({...formValues,password:e.target.value})} value={formValues.password} id="password" type="password" autoComplete="off"/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login