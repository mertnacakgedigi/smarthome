import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: "white",
  },
}));

export default function CommandList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <button type="button" onClick={handleClick}>
          Valid Command List
        </button>
        {open ? (
          <div className={classes.dropdown}>
            <p>Turn on/off the nth light</p>
            <p> Set the temperature to N</p>
            <p>Add a new light</p>
            <p>Remove the nth/Last Light</p>
            <p>Increase/decrease the temperature</p>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
