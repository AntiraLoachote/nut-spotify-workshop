import React from 'react';
import { loginEndpoint } from '../../spotify';

export default function Login() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-slate-700"
      style={{ height: '100vh' }}
    >
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="h-30 w-96"
      />
      <button
        className="mt-20 bg-white w-96 h-10 text-center align-baseline rounded-2xl"
        onClick={() => (window.location.href = loginEndpoint)}
      >
        LOG IN
      </button>
    </div>
  );
}
