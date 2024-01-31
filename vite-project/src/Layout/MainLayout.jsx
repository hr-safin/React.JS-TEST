import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
           <NavBar />
            <Outlet />
           <Footer /> 
        </>
    );
};

export default MainLayout;