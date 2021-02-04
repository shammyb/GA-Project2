import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'







export default function Searches({ queryString, loading }) {
  const [results, updateResults] = useState([])


  useEffect(() => {
    console.log(queryString)
    if (loading === false) {
      axios.get(`https://api.jikan.moe/v3/search/anime${queryString}`)
        .then(({ data }) => {
          updateResults(data.results)
        })
    }
  }, [loading])


  return <div className='section'>
    <div className='container'>
      <div className='columns is-multiline is-mobile'>
        {results.map(anime => {
          return <div key={anime.mal_id} className="column is-one-third-desktop is-half-tablet is-full-mobile">
            <Link key={anime.mal_id}
              to={{
                pathname: `/details/${anime.mal_id}`,
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