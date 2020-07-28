import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import canoo from "../style/canoo.png"

export default function Logs(props) {
    const [state, setState] = React.useState({bottom: false});

   
    

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ bottom: open });
  };
  let logList;

  console.log(props.logsAll)
  if(props.logsAll) {
    logList = props.logsAll.map((text,idx)=>{
        return    <div
     
        role="presentation"
        onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer(false)}
      > <ListItem  style ={{textAlign: "center" }} button key={idx}><ListItemText primary={`${idx+1}. ${text}`} /> </ListItem> </div>
    })
  }
  return (
    <div>
          <Badge badgeContent={logList ?  logList.length : 0 } color="primary"><img onClick={toggleDrawer(true)} className="canoo" src={canoo} alt="canoo" /></Badge>
          <Drawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer( false)}
            style = {{height : "200px"}}
          >
            {logList}
          </Drawer>
    </div>
  );
}
