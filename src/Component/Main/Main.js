import React from 'react';
import Header from '../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import UpperHeader from '../Shared/Header/UpperHeader';
import Secondupportheader from '../Shared/Header/Secondupportheader';

const Main = () => {
    return (
        <div>
            <UpperHeader></UpperHeader>
            <Secondupportheader></Secondupportheader>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;