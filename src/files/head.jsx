import react from 'react';
import './head.css';

export default function Head() {


    const linkStyle = {
        
    
    }

    const ForLink = {
        textDecoration:'none',
        linkStyle:'none',
    }



    return (
    <>
    <div className='navbar' >
        <div className="logo">
            <h2 >NETFLIX</h2>
        </div>
        <div className='nav' >
            <ul>
                <li ><a href='#' className='nav-link'>Home</a></li>
                <li><a href='#' className='nav-link'>Movies</a></li>
                <li><a href='#' className='nav-link'>TV Shows</a></li>
                 <li ><a href='#' className='nav-link'>New & Popular</a></li>
                <li><a href='#' className='nav-link'>My List</a></li>
                <li><a href='#' className='nav-link'>Browse by Languages</a></li>
            </ul>
        </div>

        <div className='login-btn' >
            <button className='btn' >Profile</button>

        </div>
    </div>
   
    </>
);
}