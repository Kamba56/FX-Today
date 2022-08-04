import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Header from './components/Header';
import HomePage from './components/Home';
import SearchResult from './components/SearchResult';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/search" element={<SearchResult />} />
    </Routes>
  </Router>
);

export default App;
