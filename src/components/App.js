import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './SideBar';
import Header from './Header';
import Routes from '../Routes';

function App() {
  console.log(process.env.NODE_ENV);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="content">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
