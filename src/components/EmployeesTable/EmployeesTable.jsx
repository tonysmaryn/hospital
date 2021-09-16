import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

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

const data = [
  {
    id: 1,
    firstName: 'Леонид',
    lastName: 'Старокадомский',
    middleName: 'Михайлович',
    birthDate: '1875-03-27',
    phone: '+79975669545',
  },
  {
    id: 2,
    firstName: 'Владимир',
    lastName: 'Демихов',
    middleName: 'Петрович',
    birthDate: '1916-06-18',
    phone: '+74951263366',
  },
  {
    id: 3,
    firstName: 'Виктор',
    lastName: 'Калнберз',
    middleName: 'Константинович',
    birthDate: '1928-06-02',
    phone: '+37156698963',
  },
  {
    id: 4,
    firstName: 'Алоис',
    lastName: 'Альцгеймер',
    middleName: 'Эдуардович',
    birthDate: '1864-06-14',
    phone: '+15559665599',
  },
  {
    id: 5,
    firstName: 'Авиценна',
    lastName: 'Сина',
    middleName: 'Абу Али Ибн',
    birthDate: '980-08-23',
    phone: '+15559171855',
  },
  {
    id: 6,
    firstName: 'Александр',
    lastName: 'Флеминг',
    middleName: 'Хугович',
    birthDate: '1881-08-06',
    phone: '+4569988569',
  },
];

const EmployeesTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>EmployeesTable</h1>
      <DataGrid rows={data} columns={columns} />
      <Link to="/:id">Link to Time Table</Link>
    </div>
  );
};

export default EmployeesTable;
