import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify'

export default function Profile() {
  const [image, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
  )
  useEffect(() => {
    apiClient.get('me').then((response) => {
      setImage(response.data.images[1].url)
    })
  }, [])

  function logout() {
    window.localStorage.removeItem('token')
    window.location.replace('/')
  }

  return (
    <div className="flex flex-col items-center">
      <img src={image} className="h-20 w-20 rounded-full" alt="profile" />
      <button className="px-2 text-white mt-4 bg-zinc-800 rounded-xl" onClick={() => logout()}>
        Log out
      </button>
    </div>
  )
}
