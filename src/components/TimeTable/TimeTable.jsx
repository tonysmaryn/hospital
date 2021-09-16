import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

const TimeTable = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>TimeTable</h1>
      <Link to="/">Link to Employees Table</Link>
    </div>
  );
};

export default TimeTable;
