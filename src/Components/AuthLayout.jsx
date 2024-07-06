import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication=true}) {

    const navigate=useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus=useSelector(state=>state.auth.status);

    useEffect(() => {
        // TODO make it more easy
        // authStatus - false
        // true && (false!==true)=true // =true

        // let authValue=authStatus===true?true:false;
        // if (authentication && authValue) {
        
        if (authentication && authStatus!==authentication) {
            navigate("/login");
        } 
        // authStatus - true
        // false && (true!==true)=false // =false (confusing)
        else if(!authentication && authStatus!==authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus,navigate,authentication]);
    


  return loader ? <h1>Loading...</h1> : <>{children}</>

}
