import React from 'react';

import style from './Menu.module.css'
import Button from '@material-ui/core/Button';

function Menu({fun1,fun2}) {




const logo={

fontSize:"40px",
textDecoration:"none",
font:"sans-serif",
color:"white",
}
  return (
      <div className={style.container}>
       
         <div><a style={logo}href="#"> Puzzle Game</a></div>
          <span className={style.asd}>
            <Button variant="outlined" className={style.buttn} onClick={fun1}>Log in</Button>
            <Button variant="outlined" className={style.buttn} onClick={fun2}>Sign Up</Button>
         
            
          </span>
           


       
       </div>
       
    );
}

export default Menu;