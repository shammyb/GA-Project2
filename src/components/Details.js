import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { css } from '@emotion/core'
import BeatLoader from 'react-spinners/BeatLoader'
import { Link } from 'react-router-dom'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function Details({ location, ready }) {

  const [anime, updateAnime] = useState({})
  const [loading, updateLoading] = useState(true)

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
    return <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="field is-grouped is-grouped-centered">
          <BeatLoader color={'#963d2f'} ready={ready} css={override} size={50} />
        </div>
      </div>
    </div>
  }

  return <div className="container is-max-desktop">
    <div className="container is-max-desktop mb-3 mt-3">
      <div id="detailstitle" className="notification is-primary has-text-centered is-size-3">{anime.title || 'N/A'}<br></br>{anime.title_japanese || 'N/A'}
      </div>
    </div>
    <div className="columns is-centered">
      <div className="column">
        <div className="column">
          <img src={anime.image_url} alt={anime.title} />
        </div>
        <div className="column">
          <iframe src={anime.trailer_url || 'No trailer 😔'}
            autoPlay={false}
            allowFullScreen="allowFullScreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen" />
        </div>
      </div>
      <div className="column">
        <div className="notification is-primary">English name: {anime.title_english || 'N/A'}</div>
        <div className="notification is-primary">Synopsis: {anime.synopsis}</div>
        <div className="notification is-primary">MyAnimeList Score: {anime.score}</div>
        <div className="notification is-primary">Number of episodes: {anime.episodes}</div>
      </div>
    </div>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="field is-grouped is-grouped-centered">
            <div className="box mt-3">
              <Link className='' to={'/GA-Project2/panel'}>New Search?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}