import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getFullWorklog } from '../../redux/Worklog/actionCreator';

const useStyles = makeStyles((theme) => ({}));

const TimeTable = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFullWorklog());
  }, [dispatch]);

  const { worklog, loading, error } = useSelector((state) => state.worklog);

  const employeeWorklog = worklog.filter(
    (item) => item.employee_id === Number(id)
  );

  const classes = useStyles();

  return (
    <div>
      <h1>TimeTable for {id}</h1>
      <Link to="/">Link to Employees Table</Link>
    </div>
  );
};

export default TimeTable;
