import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

const EmployeesTable = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>EmployeesTable</h1>
      <Link to="/:id">Link to Time Table</Link>
    </div>
  );
};

export default EmployeesTable;
