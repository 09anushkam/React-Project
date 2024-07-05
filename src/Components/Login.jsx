import React,{useState} from 'react';
import {login as authLogin} from "../store/authSlice";
import {Link,useNavigate} from "react-router-dom";
import {Button,Input,Logo} from "./index";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';

function Login() {

    const navigate=useNavigate();
    
  return (
    <div>
      
    </div>
  )
}

export default Login
