import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
  },
  logo: {
    color: theme.palette.common.white,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" className={classes.logo}>
        Hospital Time Management
      </Typography>
    </div>
  );
};

export default Header;
