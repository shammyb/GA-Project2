import React, { useState, useEffect } from 'react'
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
    updateSearchQuery(`?q=&page=1&genre=${likedQuery}&order_by=score&sort=desc&limit=12`)
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

      <div className="box has-background-primary">
        <div className="field is-horizontal">
          <div className="field has addons">
            <div className="control">
              <Formik
                initialValues={{
                  search: ''
                }}
                onSubmit={async (values) => {
                  createFilterQuery(values.search)
                  updateFormNum(5)
                }}
              >

                <Form>
                  <Field className="input" id="search" name="search" placeholder="Enter anime name.." />

                  <div className="field is-horizontal">
                    <button className="button is-right" type="submit">Search by Name</button>
                  </div>
                </Form>

              </Formik>
            </div>
          </div>
        </div>

      </div>

      <div className="container">
        <p className="subtitle is-5 has-text-centered">...Or if you fancy something new, hit the get a recommendation button below!</p>
        <button className="button" onClick={() => updateFormNum(1)}>Get a Recco</button>
      </div>


    </section >
  }

  const GenresLikedForm = () => (
    <div className="box">
      <p className="title is-3 has-text-centered">What stuff do you like?</p>
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
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="1" />Action</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="2" />Adventure</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="3" />Cars & Racing</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="4" />Comedy</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="5" />Mind-bending plots</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="6" />Demons & Demonic vibes</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="7" />Drama</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="8" />Ecchi (innuendo-based humour)</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="9" />Fantasy</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="10" />Board/Card/Video Games</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="11" />Harem (Single male protagonist + female supporting cast)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="12" />Hentai [NSFW] ( ͡° ͜ʖ ͡°)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="13" />Historical</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="14" />Horror</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="15" />Josei (Marketed to women, realistic romance etc.)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="16" />Kids</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="17" />Magic</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="18" />Martial Arts</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="19" />Mecha (Mechs & Giant Robots)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="20" />Military</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="21" />Music</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="22" />Mystery</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="23" />Parody (Spoof comedy)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="24" />Police</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="25" />Psychological</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="26" />Romance</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="27" />Samurai</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="28" />School</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="29" />Sci-Fi</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="30" />Seinen (Marketed to mature men / mature themes)</label></li>
              </ul>
            </div> <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="31" />Shoujo (Marketed to young girls, unrealistic romance + magic)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="32" />Shoujo Ai (Intimate relationships between women) [SFW]</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="33" />Shounen (Marketed to young boys, fighting/friendship/superpowers)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="34" />Shounen Ai (Intimate relationships between men) [SFW]</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="35" />Slice of Life (Just everyday things)</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="36" />Space</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="37" />Sports</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="38" />Super Powers</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="39" />Supernatural</label>
                </li><li><label className="checkbox"><Field type="checkbox" name="checked" value="40" />Thriller</label></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="41" />Vampires</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="42" />Yaoi (Guy on guy action) [NSFW]</label></li>
                <li><label className="checkbox"><Field type="checkbox" name="checked" value="43" />Yuri (Girl on girl action) [NSFW]</label></li>
              </ul>
            </div>
          </div>
          <button className="button is-primary" type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  )

  const ReadyToSubmit = () => (
    <div className="container">
      <div className="box">
        <button className="button is-primary" onClick={() => createSearchQuery()}>Get Suggestions!</button>
      </div>
    </div>
  )

  return <div>
    {formNum === 0 && <StartSearch />}
    {formNum === 1 && <GenresLikedForm />}
    {formNum === 2 && <ReadyToSubmit />}
    {formNum === 3 && <div><button onClick={() => updateFormNum(1)}> Restart </button> <Searches queryString={searchQuery} loading={loading} /></div>}
    {searchBarActive === true && <div><button onClick={() => resetSearch()}> Reset Search </button><Searches queryString={searchQuery} loading={loading} /></div>}
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