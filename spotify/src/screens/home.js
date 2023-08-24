import React, { useEffect, useState } from 'react';

import { setClientToken } from '../spotify';
import Login from '../components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Libraly from './library';
import Feed from './feed';
import Player from './player';
import Favaorites from './favorites';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';
    if (!token && hash) {
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <React.Fragment>
      {!token ? (
        <Login />
      ) : (
        <Router>
          <div className="flex flex-row h-full w-full bg-neutral-100 p-10">
            <Sidebar />
            <Routes>
              <Route path="/libraly" element={<Libraly />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/player" element={<Player />} />
              <Route path="/favorites" element={<Favaorites />} />
            </Routes>
          </div>
        </Router>
      )}
    </React.Fragment>
  );
}
