import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CSS/Moviedetails.css';
import BackButton from '../img/back-png.png'; 

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    // Get the exact movie ID from the URL (e.g., /movie/550 -> id is "550")
    const { id } = useParams();

    const API_KEY = "21286cf51219a16fea9f3826bda9282e";

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true);
                // Fetch the exact movie using the 'id' from the URL
                const detailsRes = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,similar`
                );
                const detailsData = await detailsRes.json();

                setMovie(detailsData);
                setLoading(false);

                // Scroll to the top when a new movie loads
                window.scrollTo(0, 0);
            } catch (error) {
                console.error("Error fetching movie details:", error);
                setLoading(false);
            }
        };

        // Re-run this effect every time the 'id' in the URL changes
        fetchMovieData();
    }, [id]);

    // Helper functions to format data
    const formatRuntime = (minutes) => {
        if (!minutes) return "Unknown";
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    };

    const getDirector = () => {
        if (!movie?.credits?.crew) return "Unknown";
        const director = movie.credits.crew.find(person => person.job === "Director");
        return director ? director.name : "Unknown";
    };

    if (loading || !movie) {
        return <div className="loading-screen">Loading...</div>;
    }

    return (
        <>
            <div className="details-container">
                <div className="btttn">
                    <button>
                            <Link to="/home" className="back-link">
                        <img src={BackButton} alt="Back" />
                        </Link>
                    </button>
                </div>
                <div className="hero-section">

                    <div
                        className="hero-background"
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
                    ></div>


                    <div className="hero-overlay"></div>


                    <div className="hero-content">

                        <div className="left-content">
                            <h1 className="movie-title">{movie.title}</h1>

                            <div className="meta-info">

                                <span>{movie.release_date ? movie.release_date.substring(0, 4) : ''}</span>
                                <span className="hd-badge">U/A 16+</span>
                                <span>{formatRuntime(movie.runtime)}</span>
                                <span className="hd-badge">HD</span>
                            </div>

                            <div className="action-buttons">
                                <button className="play-btn">
                                    <span>▶</span> Play
                                </button>
                                <button className="icon-btn" title="Add to My List">+</button>
                                <button className="icon-btn" title="Rate">👍</button>
                            </div>

                            <p className="movie-overview">{movie.overview}</p>
                        </div>


                        <div className="right-content">
                            <div className="cast-genre">
                                Cast: <span>{movie.credits?.cast?.slice(0, 4).map(c => c.name).join(', ') || "Unknown"}</span>
                            </div>
                            <div className="cast-genre">
                                Genres: <span>{movie.genres?.map(g => g.name).join(', ') || "Unknown"}</span>
                            </div>
                            <div className="cast-genre">
                                Director: <span>{getDirector()}</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="similar-section">
                    <h2 className="similar-heading">More Like This</h2>
                    <div className="similar-grid">
                        {movie.similar?.results?.slice(0, 12).map((similarMovie) => (

                            <Link
                                to={`/movie/${similarMovie.id}`}
                                key={similarMovie.id}
                                className="similar-card-link"
                            >
                                <div className="similar-card">
                                    <div className="similar-img-wrapper">
                                        {similarMovie.backdrop_path ? (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${similarMovie.backdrop_path}`}
                                                alt={similarMovie.title}
                                                className="similar-img"
                                            />
                                        ) : (
                                            <div className="no-image-text">
                                                No Image
                                            </div>
                                        )}
                                    </div>

                                    <div className="similar-info">
                                        <h3 className="similar-title">{similarMovie.title}</h3>
                                        <div className="similar-meta">

                                            <span>{similarMovie.release_date?.substring(0, 4)}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}