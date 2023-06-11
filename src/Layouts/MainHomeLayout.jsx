import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shear/Header/Header';
import Footer from '../Shear/Footer/Footer';

const MainHomeLayout = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainHomeLayout;