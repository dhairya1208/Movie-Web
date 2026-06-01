import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/Search.css';
import SearchIcon from '../img/Search.png';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const API_KEY = "21286cf51219a16fea9f3826bda9282e";

  // Debounced search effect
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const data = await response.json();
        setResults(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error searching movies:", error);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    searchInputRef.current?.focus();
  };

  return (
    <>
    

      <div className="search-page-container">
        
        {/* Netflix Navbar with Open Search Box */}
        <nav className="netflix-navbar">
          <div className="nav-left">
            <span className="nav-logo" onClick={() => navigate(-1)}>NETFLIX</span>
            <span className="nav-link">Home</span>
            <span className="nav-link">TV Shows</span>
            <span className="nav-link">Movies</span>
            <span className="nav-link">New & Popular</span>
            <span className="nav-link">My List</span>
            <span className="nav-link">Browse by Languages</span>
          </div>
          
          <div className="nav-right">
            {/* The Permanently Open Search Box */}
            <div className="search-box">
              <span className="search-icon"><img src={SearchIcon} alt="Search" /></span>
              <input 
                ref={searchInputRef}
                type="text" 
                className="search-input" 
                placeholder="Titles, people, genres" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              {query && (
                <button className="clear-btn" onClick={handleClear} aria-label="Clear Search">✕</button>
              )}
            </div>
            
            <div className="nav-avatar">🙂</div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="content-area">
          
          {/* Status Messages */}
          {loading && <p style={{color: '#8c8c8c', marginTop: '2rem'}}>Searching...</p>}
          {!loading && query !== '' && results.length === 0 && (
            <p style={{color: '#8c8c8c', marginTop: '2rem'}}>Your search for "{query}" did not have any matches.</p>
          )}

          {/* Results Area */}
          {results.length > 0 && query && (
            <>
              {/* Explore Related Titles */}
              <div className="related-section">
                <span>Explore titles related to:</span>
                <div className="related-list">
                  {results.slice(0, 6).map((movie) => (
                    <span 
                      key={`related-${movie.id}`} 
                      className="related-item"
                      onClick={() => setQuery(movie.title)}
                    >
                      {movie.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* Header */}
              <h2 className="results-header">Results for <span>"{query}"</span></h2>

              {/* Grid of 16:9 Backdrop Images */}
              <div className="similar-grid">
                {results.map((movie) => (
                  <Link 
                    to={`/movie/${movie.id}`} 
                    key={movie.id} 
                    className="similar-card-link"
                  >
                    <div className="similar-card">
                      <div className="similar-img-wrapper">
                        {/* We use backdrop_path instead of poster_path for horizontal cards */}
                        {movie.backdrop_path ? (
                          <>
                            <img 
                              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} 
                              alt={movie.title} 
                              className="similar-img"
                            />
                            <div className="card-title-fallback">{movie.title}</div>
                          </>
                        ) : (
                          <div className="no-image-text">
                            <span>No Image</span>
                            <span className="card-title-fallback">{movie.title}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}