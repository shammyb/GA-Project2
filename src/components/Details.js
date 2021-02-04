import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function Details({ location, ready }) {

  const [anime, updateAnime] = useState({})
  const [loading, updateLoading] = useState(true)
  const [color, setColor] = useState('#ffffff')

  useEffect(() => {
    if (location.state.loading === false) {
      axios.get(`https://api.jikan.moe/v3/anime/${location.state.id}`)
        .then(({ data }) => {
          updateAnime(data)
          updateLoading(false)
        })
    }
  }, [ready])

  if (loading) {
    return <div>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />
      <ClipLoader color={color} loading={loading} css={override} size={150} />
    </div>
  }

  return <div className="container is-max-desktop">
    <div className="columns is-centered">
      <div className="column">
        <div className="column is-centered">
          <img src={anime.image_url} alt={anime.title} />
        </div>
        <div className="column is-centered">
          <iframe src={anime.trailer_url || 'No trailer 😔'}
            autoPlay="false"
            allowFullScreen="allowFullScreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen" />
        </div>
      </div>
      <div className="column">
        <div className="notification is-primary">Name: {anime.title || 'N/A'}</div>
        <div className="notification is-primary">Japanese: {anime.title_japanese || 'N/A'}</div>
        <div className="notification is-primary">English name: {anime.title_english || 'N/A'}</div>
        <div className="notification is-primary">Synopsis: {anime.synopsis}</div>
        <div className="notification is-primary">MyAnimeList Score: {anime.score}</div>
        <div className="notification is-primary">Number of episodes: {anime.episodes}</div>
      </div>
    </div>

  </div>
}