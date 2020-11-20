import React, {createContext, useContext, useEffect, useState } from 'react';

import {auth} from '../firebase'
import firebase from "firebase/app"


const AuthContext=createContext();
export function useAuth(){

    return useContext(AuthContext);
}


 export function AuthProvider({children}) {
const[currentUser,setCurrentUser]=useState();

function login(username,pwd)
{
    return auth.signInWithEmailAndPassword(username,pwd);
}
function signup(username,pwd)
{
   return auth.createUserWithEmailAndPassword(username,pwd);
}



function logout(){
    return auth.signOut()
}


    const value={
       currentUser,
    
       signup,
       login,
       logout,
    }
    return (
       <AuthContext.Provider value={value}>
            {children}
       </AuthContext.Provider>
    );
}
