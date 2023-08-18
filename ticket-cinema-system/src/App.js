import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import './navbar.css'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    );
}

export default App;