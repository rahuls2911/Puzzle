import React from 'react';
import Menu from './Components/Menu/Menu';
import Mid from './Components/Mid/Mid';
import Foot from './Components/Foot/Foot';
import {useState} from'react';

import './Main.module.css';


function Main({routeProps}) {
  const[login,setLogin]=useState(false)

  const myfun1=(e)=>{
  
    
    setLogin(false);
    console.log(login);
  }
  const myfun2=(e)=>{
    e.preventDefault();
    setLogin(true);
    console.log(login);
    

   
  }
  return (


  
      <div className="app">
        <Menu fun1={myfun1} fun2={myfun2}/>
    {/*menu*/}
     {/*mid*/}
    <Mid num={login} routeProps={routeProps}/>

        <Foot/>
    {/*foot*/}
    </div>




  );
}

export default Main;
