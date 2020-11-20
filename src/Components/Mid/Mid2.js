import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

import SignupForm from '../SignupForm/SignupForm';

import  './Mid2.css'
function Mid2({val}) {
  
    

       

  if(!val){
    return (
  
       <div className="mid2">
            <LoginForm/>
       
        </div>
     
        
     ); }

   else {

        return(   
            
           <div className="mid2">
           <SignupForm/>
           </div>
     
         
        );

    }  
   
}

export default Mid2;