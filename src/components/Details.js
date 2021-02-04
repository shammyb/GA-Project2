import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Details({ location, loading }) {

  const [anime, updateAnime] = useState({})

  useEffect(() => {
    if (location.state.loading === false) {
      axios.get(`https://api.jikan.moe/v3/anime/${location.state.id}`)
        .then(({ data }) => {
          updateAnime(data)
        })
    }
  }, [loading])

  // if (!anime.id) {
  //   // ? Could return a loader in here.
  //   return null
  // }

  return <div className="container is-max-desktop">
    <div className="notification is-primary">Name: {anime.title || 'N/A'}</div>
    <div className="notification is-primary">Japanese: {anime.title_japanese || 'N/A'}</div>
    <div className="notification is-primary">English name: {anime.title_english || 'N/A'}</div>
    <div className="notification is-primary">Synopsis: {anime.synopsis}</div>
    <div className="notification is-primary">MyAnimeList Score: {anime.score}</div>
    <div className="notification is-primary">Number of episodes: {anime.episodes}</div>
    <div className="columns is-centered">
      <img src={anime.image_url} alt={anime.title} />
    </div>
    <div className="columns is-centered">
      <iframe src={anime.trailer_url || 'No trailer 😔'}
        autoPlay="false"
        allowFullScreen="allowFullScreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen" />
    </div>
  </div>
}