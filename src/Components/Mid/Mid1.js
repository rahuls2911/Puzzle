import React from 'react';
import Logo1 from './Logo1';

import style from './Mid1.module.css'
import Mid1text from './Mid1text';





function Mid1(props) {
    
    const logo = {
        width:"1000px",
        color:"dodgerblue",
        height:"1000px",
       
    }
    return (
        
        <div className={style.mid1} >
         
         
         <Mid1text/>
        </div>
    );
}

export default Mid1;