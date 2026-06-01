import React, { useState, useEffect } from 'react';
import '../CSS/ShowMovie.css';
import { Link } from 'react-router-dom';

export default function ShowMovie() {

    const [movie, setMovie] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [hindiMovie, setHindiMovie] = useState([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const API_KEY = "21286cf51219a16fea9f3826bda9282e";

    useEffect(() => {
        fetchMovie();
        fetchPopularMovie();
        fetchHindiMovie();
    }, []);

    useEffect(() => {

        if (movie.length === 0) return;

        const interval = setInterval(() => {

            setCurrentIndex((prevIndex) =>
                prevIndex === movie.length - 1 ? 0 : prevIndex + 1
            );

        }, 3000);

        return () => clearInterval(interval);

    }, [movie]);

    const fetchMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
        );

        const data = await response.json();

        setMovie(data.results);
    };

    const fetchPopularMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        const data = await response.json();

        setPopularMovie(data.results);
    };

    const fetchHindiMovie = async () => {

        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi`
        );

        const data = await response.json();

        setHindiMovie(data.results);
    };

    const nextSlide = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === movie.length - 1 ? 0 : prevIndex + 1
        );

    };

    const prevSlide = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? movie.length - 1 : prevIndex - 1
        );

    };

    return (
        <>


            <div className='slider-container'>

                <button className='slide-btn left' onClick={prevSlide}>
                    ❮
                </button>

                <div className='slider'>

                    {movie.map((movieItem, index) => (

                        <div
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            key={movieItem.id}
                        >

                            <img
                                src={`https://image.tmdb.org/t/p/original${movieItem.backdrop_path}`}
                                alt={movieItem.title}
                            />

                            <div className='slide-content'>

                                <h1>{movieItem.title}</h1>

                                <p>
                                    ⭐ {movieItem.vote_average.toFixed(1)}
                                </p>

                                <button className='watch-btn'>
                                    <Link to={`/movie/${movieItem.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        ▶ Watch Now
                                    </Link>
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

                <button className='slide-btn right' onClick={nextSlide}>
                    ❯
                </button>

            </div>


            {/* POPULAR MOVIES */}

            <div className='movie-container'>

                <p className='heading'>Most Popular Movies</p>

                <div className="movie-row">

                    {popularMovie.map((movie) => (

                        <div className='movie-poster' key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>

                            <div className='movie-info'>

                                <h3>{movie.title}</h3>

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
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>
                            <div className='movie-info'>

                                <h3>{movie.title}</h3>

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