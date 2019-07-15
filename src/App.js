import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/SideBar';
import Header from './components/Header';
import Routes from './Routes';

function App() {
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
