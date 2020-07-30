import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



export default function LastLog(props) {
    const [open, setOpen] = React.useState(false);


    useEffect(()=>{
        setOpen(true);
    },[props.logs])

   const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        message={props.logs ? props.logs[props.logs.length-1] : "" }
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
    
      />
    </div>
  );
}
