import React from 'react'
import Switch from '@material-ui/core/Switch';
import loop from '../../style/images/loop.gif'
import dark from '../../style/images/canoodark.jpg'




function Light({toggleLight, deleteLight , id , checkOn}) {
    return (
        <div className="box">     
            { checkOn ?
                 <img className="canoo"  src={loop} alt="loop"/> 
                 :
                 <img className="canoo" src={dark} alt="loop"/>
            }
            <span className="delete" onClick = {()=> deleteLight(id)}>&#10006;</span>
            <Switch 
            checked={checkOn} 
            onChange ={() => toggleLight(id)}
            color="primary"
            />   
        </div>
    )
}


export const Memoized = React.memo(Light)