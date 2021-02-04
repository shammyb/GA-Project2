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

  return <div>
    <div>Name: {anime.title || 'N/A'}</div>
    <div>Japanese: {anime.title_japanese || 'N/A'}</div>
    <div>English name: {anime.title_english || 'N/A'}</div>
    <div>Synopsis: {anime.synopsis}</div>
    <div>MyAnimeList Score: {anime.score}</div>
    <div>Number of episodes: {anime.episodes}</div>
    <img src={anime.image_url} alt={anime.title} />
    <iframe src={anime.trailer_url || 'No trailer 😔'} />
  </div>
}