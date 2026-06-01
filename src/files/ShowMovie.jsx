import React, { useState, useEffect } from 'react';
import './ShowMovie.css';



export default function ShowMovie() {

    const [movie, setMovie] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [hindiMovie, setHindiMovie] = useState([]);


    const API_KEY = "21286cf51219a16fea9f3826bda9282e";

    useEffect(() => {
        fetchMovie();
    }, []);

    useEffect(() => {
        fetchPopularMovie();
    }, []);

     useEffect(() => {
        fetchHindiMovie();
    }, []);

    const fetchMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );

        const data = await response.json();

        console.log(data);

        setMovie(data.results);
    };


    const fetchPopularMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        const data = await response.json();

        setPopularMovie(data.results);
    }

    
    const fetchHindiMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi`
        );

        const data = await response.json();

        setHindiMovie(data.results);
    }

    return (
        <>
        <div className='movie-container top-row'>
            <p className='top-head heading'>Today's Most Watched</p>
            <div className="movie-row">
                {movie.map((movie) => (
                    <div className='movie-poster' key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}  
                        />
                        <div className='movie-info'>
                            <h3>{movie.title}</h3>
                            <button>❤️</button>
                            <p className = "Rating">⭐ {movie.vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    <div className='movie-container'>
            <p className='heading'>Most Popular Movies</p>
            <div className="movie-row"> 
                {popularMovie.map((movie) => (
                    <div className='movie-poster' key={movie.id}>       
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}/>
                        <div className='movie-info'>
                            <button>❤️</button>
                            <p>⭐ {movie.vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
<div className='movie-container'>
            <p className='heading'>Hindi Movies</p>
            <div className="movie-row"> 
                {hindiMovie.map((movie) => (
                    <div className='movie-poster' key={movie.id}>       
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}/>
                        <div className='movie-info'>
                            <button>❤️</button>
                            <p>⭐ {movie.vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

     </>

        );
    }