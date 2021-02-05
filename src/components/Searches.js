import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { css } from '@emotion/core'
import BeatLoader from 'react-spinners/BeatLoader'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`


export default function Searches({ queryString, loading }) {
  const [results, updateResults] = useState([])
  const [ready, updateReady] = useState(true)


  useEffect(() => {
    // if (loading === false) {
    axios.get(`https://api.jikan.moe/v3/search/anime${queryString}`)
      .then(({ data }) => {
        updateResults(data.results)
        updateReady(false)
      })
    // }
  }, [loading])

  if (ready) {
    return <div className="columns is-centered">
      <div className="column is-two-thirds">
        <div className="field is-grouped is-grouped-centered">
          <BeatLoader color={'#963d2f'} ready={ready} css={override} size={50} />
        </div>
      </div>
    </div>
  }


  return <div className='section'>
    <div className='container'>
      <div className='columns is-multiline is-mobile'>
        {results.map(anime => {
          return <div key={anime.mal_id} className="column is-one-third-desktop is-half-tablet is-full-mobile">
            <Link key={anime.mal_id}
              to={{
                pathname: `/GA-Project2/details/${anime.mal_id}`,
                state: {
                  id: anime.mal_id,
                  loading: loading
                }
              }}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <h2 className="title is-4">
                        {anime.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-225x319">
                    <img className="has-ratio" width="225" height="319" src={anime.image_url} alt={anime.title} />
                  </figure>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
  </div>


}