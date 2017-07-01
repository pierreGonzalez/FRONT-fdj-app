import React from 'react';
import ReactDom from 'react-dom';
import Header from './header';

const Layout = ({ children }) => (
    <div>
      <Header/>
      <div>
        {children}
      </div>
    </div>
);
export default Layout;
