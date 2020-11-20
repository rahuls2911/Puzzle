import React from 'react';
import style from './Mid1text.module.css';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
function Mid1text(props) {
    return (
        <div className={style.textHolder}>
            <div className={style.buk}><span ><div className={style.icn}> </div>Create An Account</span></div>

            
            <div className={style.buk}>     <span ><div className={style.icn}>   </div> Login Using credentials   </span></div>
          
                
          
            <div className={style.buk}>  <span ><div className={style.icn}> </div> Enjoy the Game.      </span></div>
           

            
        </div>
    );
}

export default Mid1text;