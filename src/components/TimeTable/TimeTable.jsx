import { makeStyles } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFullWorklog } from '../../redux/Worklog/actionCreator';
import { checkViolations } from '../../utils/checkViolations';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 500,
    '& .red': {
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'red',
      },
    },
  },
}));

const columns = [
  {
    field: 'from',
    headerName: 'Время ухода',
    width: 300,
    valueFormatter: (params) => {
      const date = params
        .getValue(params.id, 'from')
        .split(' ')[0]
        .split('-')
        .reverse()
        .join('.');
      const time = params.getValue(params.id, 'from').split(' ')[1];
      return `${time}, ${date}`;
    },
  },
  {
    field: 'to',
    headerName: 'Время возвращения',
    width: 300,
    valueFormatter: (params) => {
      const date = params
        .getValue(params.id, 'to')
        .split(' ')[0]
        .split('-')
        .reverse()
        .join('.');
      const time = params.getValue(params.id, 'to').split(' ')[1];
      return `${time}, ${date}`;
    },
  },
];

const TimeTable = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFullWorklog());
  }, [dispatch]);

  const { worklog, loading, error } = useSelector((state) => state.worklog);

  const { employees } = useSelector((state) => state.employees);

  const employee = employees.filter((item) => item.id === Number(id))[0];

  const employeeWorklog = worklog.filter(
    (item) => item.employee_id === Number(id)
  );

  const violations = checkViolations(worklog, id);

  const classes = useStyles();

  if (loading) {
    return <h2>Идет загрузка</h2>;
  }

  if (error) {
    return <h2>При загрузке произошла ошибка</h2>;
  }

  return (
    <div className={classes.container}>
      <h2>
        Таблица учета учета рабочего времени для {employee.lastName}{' '}
        {employee.firstName} {employee.middleName}
      </h2>
      <DataGrid
        columns={columns}
        rows={employeeWorklog}
        getRowClassName={(params) => {
          if (violations.includes(params.id)) return `red`;
        }}
      />
    </div>
  );
};

export default TimeTable;
