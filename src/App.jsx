import React from 'react';
import {useState} from 'react';
import Head from './files/head';
import ShowMovie from './files/ShowMovie';
import Footer from './files/Footer';


export default function App() {

  const [count, setCount] = useState(0);

  return (
  <>
  <Head />
  <ShowMovie />
  <Footer/>
  </>    

  );
}
