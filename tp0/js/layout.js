import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/smartComponents/header-container';

const Layout = ({ children }) => (
    <div>
      <Header/>
      <div>
        {children}
      </div>
    </div>
);
export default Layout;
