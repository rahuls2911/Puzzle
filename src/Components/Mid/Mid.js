import React from 'react';


import style from './Mid.module.css'
import Mid1 from './Mid1';
import Mid2 from './Mid2';
function Mid({num,routeProps}) {
    return (
     
        <div className={style.mid}>
            <Mid1/>
            <Mid2 val={num} routeProps={routeProps} />
          
        </div>
   
    );
}

export default Mid;