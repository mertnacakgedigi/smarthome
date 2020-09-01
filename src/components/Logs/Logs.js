import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import home from "../../style/images/home.png"

export default function Logs(props) {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  setState(open);
  };

  let logList;

  if(props.logsAll) {
    logList = props.logsAll.map((text,idx)=>{
        return<ListItem  button key={idx}>
               <ListItemText primary={`${idx+1}. ${text}`} /> 
              </ListItem> 
    })
  }
  return (
    <div>
          <div className="notification"><Badge onClick={toggleDrawer(true)} badgeContent={logList ?  logList.length : 0 } color="primary"><img onClick={toggleDrawer(true)} className="home icon" src={home} alt="home" /></Badge></div>
          <Drawer
            anchor={'bottom'}
            open={open}
            onClose={toggleDrawer( false)}
            style = {{height : "200px"}}>
            <div
              className="log-list"
              role="presentation"
              onClick={toggleDrawer( false)}
              onKeyDown={toggleDrawer(false)}>
              {logList}
            </div>
          </Drawer>
    </div>
  );
}
