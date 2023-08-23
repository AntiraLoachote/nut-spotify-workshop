// eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Libraly from './library';
import Feed from './feed';
import Player from './player';
import Favaorites from './favorites';
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <Router>
      <div className="flex flex-row h-full w-full bg-green-100 p-10">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Libraly />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favaorites />} />
        </Routes>
      </div>
    </Router>
  );
}
