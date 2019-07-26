import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './SideBar';
import Header from './Header';
import Routes from '../Routes';
import constants from '../constants';

const authToken = localStorage.getItem(constants.AUTH_TOKEN) ? true : false;

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Sidebar visible={authToken} />
        <div id="content">
          <Header visible={authToken} />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
