import React from 'react';
import Top from './Top';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Top />
      <div className="content">
        {children}
      </div>
  
      <Outlet/>
    </>
  );
};

export default Layout;
