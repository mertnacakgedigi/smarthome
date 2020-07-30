import React, {useEffect, useState} from 'react'

import Snackbar from '@material-ui/core/Snackbar';


export default function LastLog(props) {
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        setOpen(true);
    },[props.logs])

   const handleClick = () => {
    setOpen(false);
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
