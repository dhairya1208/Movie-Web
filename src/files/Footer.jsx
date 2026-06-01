import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer-container'>
            <p >Copyright &copy; 2024 Movie Web. All rights reserved.</p>
            <ul className='footer-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>   
            </ul>

            <ul>
                <li><a href='#'>Trending Movies</a></li>
                <li><a href='#'>Top Rated</a></li>
                <li><a href='#'>Upcoming</a></li>   
                
            </ul>
        </div>
    );
}