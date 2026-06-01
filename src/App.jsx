import React from 'react';
import {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Head from './container/JSX/head';
import ShowMovie from './container/JSX/ShowMovie';
import Footer from './container/JSX/Footer';
import Index from './container/JSX/index';
import Profile from './container/JSX/Profile';
import Moviedetails from './container/JSX/Moviedetails';
import SearchPage from './container/JSX/Search';




export default function App() {

  const [count, setCount] = useState(0);

  return (
  <>
  <BrowserRouter>
    <Routes>

            <Route
          path="/home"
          element={
            <>
              <Head />
              <ShowMovie />
            </>
          }
        />

        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<Moviedetails />} />
        <Route path="/search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
  <Footer />
  </>    

  );
}
