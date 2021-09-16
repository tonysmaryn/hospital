import { Button, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant={'body1'}>Created by Anton Maryn</Typography>
      <div className={classes.contacts}>
        <IconButton
          href="https://github.com/tonysmaryn"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/anton-maryn-a25039212/"
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
        <Button
          href="https://hh.ru/resume/4ea640ebff08ed205c0039ed1f7a6c6e63466e"
          target="_blank"
          color="inherit"
        >
          CV
        </Button>
      </div>
    </div>
  );
};

export default Footer;
