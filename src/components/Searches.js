import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

const debouncedSave = debounce((query, updateShows) => {
  axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(({ data }) => {
      updateCharacters(data.results)
    })
}, 500)



export default function Searches({ queryString, loading }) {
  const [results, updateResults] = useState([])
  const [shows, updateShows] = useState([])

  
  useEffect(() => {
    if (loading === false) {
      axios.get(`https://api.jikan.moe/v3/search/anime${queryString}`)
        .then(({ data }) => {
          updateResults(data.results)
        })
    }
  }, [loading])


  return <div>
    {results.map(anime => {
      return <Link
        key={anime.mal_id}
        to={{
          pathname: `/details/${anime.mal_id}`,
          state: {
            id: anime.mal_id,
            loading: loading
          }
        }}
      >
        <div >
          {anime.title}
          <img src={anime.image_url} alt={anime.title} />
        </div>
      </Link>
    })}
  </div>


}