import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesList } from '../../redux/actionCreators';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 600,
  },
}));

const columns = [
  {
    field: 'id',
    headerName: 'ID',
  },
  {
    field: 'fullName',
    headerName: 'ФИО врача',
    width: 300,
    renderCell: (params) => (
      <Link to={`/${params.id}`}>
        {params.getValue(params.id, 'lastName')}{' '}
        {params.getValue(params.id, 'firstName')}{' '}
        {params.getValue(params.id, 'middleName')}
      </Link>
    ),
  },
  {
    field: 'birthDate',
    headerName: 'Дата рождения',
    width: 300,
    valueFormatter: (params) => {
      const formatedData = params
        .getValue(params.id, 'birthDate')
        .split('-')
        .reverse()
        .join('.');
      return `${formatedData}`;
    },
  },
  {
    field: 'phone',
    headerName: 'Номер телефона',
    width: 300,
  },
];

const EmployeesTable = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getEmployeesList());
  }, [dispatch]);
  const data1 = useSelector((state) => state.employees);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>EmployeesTable</h1>
      <DataGrid rows={data1} columns={columns} />
      <Link to="/:id">Link to Time Table</Link>
    </div>
  );
};

export default EmployeesTable;
