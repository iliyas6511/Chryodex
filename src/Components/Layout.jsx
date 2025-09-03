import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const Layout = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <main className='mt-[120px]'>
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default Layout
