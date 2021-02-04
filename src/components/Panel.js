import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'

// import { debounce } from 'lodash'
// import axios from 'axios'


import Searches from './Searches'


export default function Panel() {
  const [searchQuery, updateSearchQuery] = useState('')
  const [genresLiked, updateGenresLiked] = useState([])
  const [loading, updateLoading] = useState(true)
  const [formNum, updateFormNum] = useState(0)
  const [searchBarActive, updateSearchBarActive] = useState(false)

  // const debouncedSave = debounce((query, updateShows) => {
  //   axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`)
  //     .then(({ data }) => {
  //       updateShows(data)
  //     })
  // }, 500)


  // useEffect(() => {
  //   debouncedSave(filter, updateShows)

  // }, [filter])


  function createSearchQuery() {
    const likedQuery = genresLiked.join('&genre=')
    updateSearchQuery(`?q=&page=1&genre=${likedQuery}&order_by=members&sort=desc&limit=12`)
    updateLoading(false)
    updateFormNum(3)
  }

  function createFilterQuery(filter) {
    updateSearchBarActive(true)
    updateSearchQuery(`?q=${filter}`)
    updateLoading(false)
  }

  function resetSearch() {
    updateSearchBarActive(false)
    updateLoading(true)
    updateFormNum(0)
  }

  const StartSearch = () => {
    return <section className="section">
      <div className="container">
        <p className="title is-5 has-text-centered">Welcome! This app will search and recommend anime to you!</p>
        <p className="subtitle is-5 has-text-centered">Feel free to look up your favourites in the search bar...</p>
      </div>

      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="box is-half has-background-primary mt-3">
            <Formik
              initialValues={{
                search: ''
              }}
              onSubmit={async (values) => {
                createFilterQuery(values.search)
                updateFormNum(5)
              }}
            >
              <div className="field is-grouped is-grouped-centered">
                <Form className="field is-grouped is-grouped-centered is-flex-direction-row">
                  <p className="control"><Field className="input" id="search" name="search" placeholder="Enter anime name.." /></p>
                  <p className="control"><button className="button" type="submit">Search</button></p>
                </Form>
              </div>

            </Formik>
          </div>
        </div>
      </div>


      <div className="container">
        <p className="is-size-5 has-text-centered">...Or if you fancy something new, hit the get a recommendation button below!</p>
        <p className="is-size-6 has-text-centered">You will get suggestions based on MyAnimeList popularity rankings</p>
      </div>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="box has-background-primary mt-3">
            <div className="field is-grouped is-grouped-centered">
              <button className="button" onClick={() => updateFormNum(1)}>Get a Recommendation</button>
            </div>
          </div>
        </div>
      </div>
    </section >
  }

  const GenresLikedForm = () => (
    <div className="box">
      <p className="title is-3 has-text-centered">What stuff do you like?</p>
      <p className="subtitle is-5 has-text-centered">Less genres picked will give you a better recommendation!</p>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={async (values) => {
          updateGenresLiked(values.checked)
          updateFormNum(2)
        }}
      >
        <Form>
          <div className="level" role="group" aria-labelledby="checkbox-group">
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="1" /> Action</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="2" /> Adventure</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="3" /> Cars & Racing</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="4" /> Comedy</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="5" /> Mind-bending plots</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="6" /> Demons & Demonic vibes</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="7" /> Mystery</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="8" /> Drama</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="9" /> Ecchi (innuendo-based humour)</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="10" /> Fantasy</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="11" /> Board/Card/Video Games</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="13" /> Historical</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="14" /> Horror</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="15" /> Kids</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="16" /> Magic</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="17" /> Martial Arts</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="18" /> Mecha (Mechs & Giant Robots)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="19" /> Music</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="20" /> Parody (Spoof comedy)</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="21" /> Samurai</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="22" /> Romance</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="23" /> School</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="24" /> Sci-Fi</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="25" /> Shoujo (For young girls, unrealistic romance + magic)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="26" /> Shoujo Ai (Intimate relationships between women)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="27" /> Shounen (For young boys, fighting/friendship/superpowers)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="28" /> Shounen Ai (Intimate relationships between men)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="29" /> Space</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="30" /> Sports</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="31" /> Super Powers</label></li>
              </ul>
            </div> <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="32" /> Vampires</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="35" /> Harem (Single male protagonist + female supporting cast)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="36" /> Slice of Life (Just everyday things)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="37" /> Supernatural</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="38" /> Military</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="39" /> Police</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="40" /> Psychological</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="41" /> Thriller</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="42" /> Seinen (Mature themes)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="43" /> Josei (For women, realistic romance etc.)</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"> LEWD CORNER ( ͡° ͜ʖ ͡°) <br></br> [NSFW] </label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="12" /> Hentai </label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="33" /> Yaoi (Guy on guy action) </label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="34" /> Yuri (Girl on girl action) </label></li>
              </ul>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="field is-grouped is-grouped-centered">
                <button className="button is-primary" type="submit">Next</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )

  const ReadyToSubmit = () => (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="field is-grouped is-grouped-centered">
            <div className="box">
              <button className="button is-primary" onClick={() => createSearchQuery()}>Get Suggestions!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return <div>
    {formNum === 0 && <StartSearch />}
    {formNum === 1 && <GenresLikedForm />}
    {formNum === 2 && <div><GenresLikedForm /><ReadyToSubmit /></div>}
    {formNum === 3 && <div>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <div className="field is-grouped is-grouped-centered">
              <div className="box mt-3">
                <button className="button is-primary" onClick={() => updateFormNum(1)}> Try another? </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Searches queryString={searchQuery} loading={loading} />
    </div>
    }
    {searchBarActive === true && <div>
      <div className="container">
        <button className="button is-primary" onClick={() => resetSearch()}> Reset Search </button>
      </div>
      <Searches queryString={searchQuery} loading={loading} />
    </div>
    }
  </div>
}

{/* <section className="section">
  <div className="container">
    <div className="container">
      <h1>Hey this app will search and recommend anime to you! If you know what youre looking for feel free to look up your favourites in the search bar. Or if you fancy something new, hit the get a recommendation button below! </h1>
    </div>

    <form>
      <input
        type="text"
        className="input"
        placeholder="Enter anime name.."
        onChange={(event) => updateFilter(event.target.value)}
        value={filter}
      />
      <button className="button" type="submit" onClick={() => createFilterQuery()}>Search by Name</button>
    </form>

    <button className="button" onClick={() => updateFormNum(1)}>Get a Recco</button>
  </div>
</section>} */}