import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

const LogoutButton = () => {

    const dispatch=useDispatch();

    const logoutHandler=()=>{
        
        // logout method called from authService class
        authService.logout().then(()=>{
            // logout reducer called from store
            dispatch(logout());
        })
        .catch((err)=>{throw err});

    }

  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={logoutHandler}>Logout</button>
  );
}

export default LogoutButton