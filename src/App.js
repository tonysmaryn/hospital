import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
