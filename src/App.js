import React,{useEffect,useState} from "react";
import {useDispatch} from "react-redux"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import axios from "axios";

import actionTypes from "./redux/action/actionTypes";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const dispatch=useDispatch()
  const [isDataRead,setIsDataRead]=useState(false)

  useEffect(()=>{
    // check from localstorage if user is logged in
    const localStorage=window.localStorage.getItem("loginState")
    if(localStorage === null){
      const state={
        isLogin:false,
        username:"",
        role:""
      }
      window.localStorage.setItem("loginState",JSON.stringify(state))
    }else{
      const fromLocalStrg=JSON.parse(localStorage)
      dispatch({type: actionTypes.USER_INFO_CHECK, payload: fromLocalStrg})

    }
    // fetch users from api
    dispatch({type:actionTypes.FETCH_USERS_START})
    axios.get("http://localhost:3004/users")
    .then(res=>{
      dispatch({type:actionTypes.FETCH_USERS_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
      console.log("get users err",err)
      dispatch({type:actionTypes.FETCH_USERS_FAIL,payload:"Get users failed"})
    })
    setIsDataRead(true)
  },[])

  if(!isDataRead) return null

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
