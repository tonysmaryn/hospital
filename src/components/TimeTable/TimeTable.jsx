import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({}));

const TimeTable = () => {
  const classes = useStyles();
  const { id } = useParams();
  return (
    <div>
      <h1>TimeTable for {id}</h1>
      <Link to="/">Link to Employees Table</Link>
    </div>
  );
};

export default TimeTable;
