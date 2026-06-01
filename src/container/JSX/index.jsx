import React from 'react';
import '../CSS/index.css';
import User from '../img/User.png';
import {Link} from 'react-router-dom';

export default function Profile() {

    const profiles = [
        {
            id: 1,
            name: "Dhairya",
            img: User
        },

        {
            id: 2,
            name: "Movies",
            img: User
        },

        {
            id: 3,
            name: "Kids",
            img: User
        },

        {
            id: 4,
            name: "Guest",
            img: User
        }
    ];

    return (

        <div className='profile-page'>

            <h1>Who's Watching?</h1>

            <div className='profile-container'>

                {profiles.map((profile) => (

                    <div className='profile-card' key={profile.id}>
                        <Link to='/home' >
                        <img
                            src={profile.img}
                            alt={profile.name}
                        />

                        <p>{profile.name}</p>
                        </Link>

                    </div>

                ))}

            </div>

            <button className='manage-btn'>
                Manage Profiles
            </button>

        </div>
    );
}