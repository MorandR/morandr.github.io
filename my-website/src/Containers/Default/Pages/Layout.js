import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../CSS/Layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/secret">SECRET</Link>
        <Link to="/about">About Me</Link>
        <Link to="/person">Person</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
