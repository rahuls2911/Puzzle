import React, { useState } from 'react';
import style from './SignupForm.module.css';
import {useRef} from 'react'
import Button from '@material-ui/core/Button';
import {useAuth} from '../../contexts/AuthContext'
import{useHistory} from 'react-router-dom'


const SignupForm = () => {
    
    
    
const history=useHistory();

const  {signup }=useAuth();
const signupnameRef=useRef();
const signuppwdRef=useRef();



const[loading,setLoading]=useState(false)
const[name,setName]=useState("")
const[pwd,setPwd]=useState("");



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
        
      await signup(name,pwd);
  
    }
    catch(error)
    {
        alert('SignUp Failed! Enter Correct email ID!!')
        console.log('ssgssgsgsddssdf')
    }

      setLoading(false);
    





 

    };

    
    return (
        <div className={style.container}>
            <h1> SignUp </h1>
         
       <div className={style.inpt}><input className={style.inpt1} ref={signupnameRef}  type="text" autoComplete="off" id="1"  placeholder="Your Email Id" value={name} onChange={handleChange}/></div>
           <div className={style.inpt}><input className={style.inpt1}  ref={signuppwdRef} type="password" autoComplete="off"   id="2"  placeholder="New Password"    value={pwd}     onChange={handleChange}      /></div>
           <div className={style.submt}>  <Button disabled={loading} variant="outlined" color="primary" className={style.buttn} onClick={handleSubmit}>Sign Up</Button></div>
              
        </div>
    );
};

export default  SignupForm;