import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import TimeTable from '../../components/TimeTable/TimeTable';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={EmployeesTable} />
        <Route path="/:id" component={TimeTable} />
      </Switch>
      <Footer />
    </>
  );
};

export default MainLayout;
