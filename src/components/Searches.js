import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Searches(queryString) {
  const [results, updateResults] = useState([])

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/search/anime/${queryString}`)
      .then(({ data }) => {
        updateResults(data.results)
      })
  }, [])



  return <div>
    {results.map(anime => {
      return <Link
        key={anime.mal_id}
        to={`/details/${anime.mal_id}`}
      >
        <div >
          {anime.title}
          <img src={anime.image_url} alt={anime.title} />
        </div>
      </Link>
    })}
  </div>


}