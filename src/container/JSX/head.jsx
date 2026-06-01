import react from 'react';
import '../CSS/head.css';
import Search from '../img/Search.png';
import Profile from '../img/profile.png';

import {Link}  from 'react-router-dom';

export default function Head() {




    return (
    <>
    <div className='navbar' >
        <div className="logo">
            <h2 >NETFLIX</h2>
        </div>
        <div className='nav' >
            <ul>
                <li ><Link to='/' className='nav-link'>Home</Link></li>
                <li><Link to='/movies' className='nav-link'>Movies</Link></li>
                <li><Link to='/tv-shows' className='nav-link'>TV Shows</Link></li>
                <li ><Link to='/new-popular' className='nav-link'>New & Popular</Link></li>
                <li><Link to='/my-list' className='nav-link'>My List</Link></li>
                <li><Link to='/languages' className='nav-link'>Browse by Languages</Link></li>
            </ul>
        </div>

        <div className='login-btn' >
            <Link to='/search' className='btn'><img src={Search} alt='Search' /></Link>
            <Link to='/profile' className='btn' ><img src={Profile} alt='Profile' /></Link>

        </div>
    </div>
   
    </>
);
}