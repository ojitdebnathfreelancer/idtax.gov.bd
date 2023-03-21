import React from 'react';
import { Link } from 'react-router-dom';
import nav1 from '../../Assets/nav-left-logo.png';
import nav2 from '../../Assets/nav-right-logo.png';
import { GoThreeBars } from 'react-icons/go'

const Nabar = () => {
    return (
        <div className='bg-purple h-[82px] flex justify-between pb-4 px-5'>
            <div>
                <Link to="/" className='mt-5'>
                    <img src={nav1} alt="logo" />
                </Link>
                <GoThreeBars />
            </div>
            <img src="https://ldtax.gov.bd/assets/admin/layout4/img/nagorik.png" alt='logo'></img>
        </div>
    );
};

export default Nabar;