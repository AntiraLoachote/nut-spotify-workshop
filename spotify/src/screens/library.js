import React, { useEffect, useState } from 'react'
import apiClient from '../spotify'

export default function Libraly() {
  //create use Playlists state useState
  const [playlists, setPlaylists] = useState([])

  //create tracks state useState
  const [tracks, setTracks] = useState([])

  //fetch tracks in useEffect
  useEffect(() => {
    apiClient.get('me/tracks').then((res) => {
      setTracks(res.data.items)
    })
  }, [])

  //useEffect to get playlists
  useEffect(() => {
    apiClient.get('me/playlists').then((res) => {
      setPlaylists(res.data.items)
    })
  }, [])

  return (
    // create html one row to render playlists using tailwindcss and grid css
    <div className="px-4">
      <h1 className="p-2 text-3xl font-bold text-white">Your Playlist</h1>
      {/* // create html one row to render playlists using tailwindcss */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, 240px)' }}>
        {playlists.map((playlist) => (
          // Get external link from playlist
          <a
            key={playlist.id}
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <div key={playlist.id} className=" p-2">
              <div className="bg-zinc-950 rounded-lg shadow-lg">
                <div className="p-2">
                  <img src={playlist.images[0].url} alt={playlist.name} className="rounded-lg" />
                </div>
                <div className="p-2">
                  <h3 className="text-white text-lg font-bold truncate">{playlist.name}</h3>
                  <p className="text-gray-400">{playlist.tracks.total} Tracks</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr />
      {/* // create html rendering tracks name and image track using tailwindcss and flex col */}
      <h1 className="text-3xl font-bold text-white p-2">Your Tracks</h1>
      <div className="flex flex-col">
        {tracks.map((track) => (
          // get external link from track
          <a
            key={track.track.id}
            href={track.track.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-2">
              <div className="bg-zinc-950 rounded-lg shadow-lg">
                <div className="p-2 flex flex-row">
                  <img
                    width={80}
                    height={80}
                    src={track.track.album.images[0].url}
                    alt={track.track.name}
                    className="rounded-lg"
                  />

                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold truncate">{track.track.name}</h3>
                    <p className="text-gray-400">{track.track.artists[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
