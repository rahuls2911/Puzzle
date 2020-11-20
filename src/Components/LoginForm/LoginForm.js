import React, { useState,useRef } from 'react';
import style from './LoginForm.module.css';
 import {useAuth} from '../../contexts/AuthContext';
import Button from '@material-ui/core/Button';
import{useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'





const LoginForm = (props) => {
const history=useHistory();
    const {login} = useAuth();
const[name,setName]=useState("")

const[pwd,setPwd]=useState("");
const[loading,setLoading]=useState(false)
const loginnameRef=useRef();
const loginpwdRef=useRef();
 const handleChange=(event)=>{
       
if(event.target.id==="1")
setName(event.target.value);
else
setPwd(event.target.value);

    }

async function handleSubmit(e){
         e.preventDefault();
         setLoading(true);



        try{

            await login(name,pwd)
            
            history.push("/aftersignin")
           
          

            

        }
        catch(error){
         alert('Please Enter Correct Details!!')
 
        }
    
        setLoading(false);

    };
    
    return (



      
     
     
       
        <div className={style.container}>
            <h1> Log In </h1>
           <div className={style.inpt}><input type="email" ref={loginnameRef} autoComplete="off" id="1" className={style.inpt1} placeholder="UserName" value={name} onChange={handleChange}/></div>
           <div className={style.inpt}><input type="password" ref={loginpwdRef}  autoComplete="off"  id="2" className={style.inpt1}    placeholder="Password"    value={pwd}     onChange={handleChange}      /></div>
           <div className={style.submt}>  <Button  disabled={loading} variant="outlined" color="primary" className={style.buttn} onClick={handleSubmit}>Login</Button></div>
             
         
        </div>
     
    );
};

export default LoginForm;