import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'



import Searches from './Searches'


export default function Panel() {
  const [searchQuery, updateSearchQuery] = useState('')
  const [genresLiked, updateGenresLiked] = useState([])
  const [genresExcluded, updateGenresExcluded] = useState([])
  const [loading, updateLoading] = useState(true)
  const [formNum, updateFormNum] = useState(0)

  function createSearchQuery() {
    const likedQuery = genresLiked.join(',')
    const excludedQuery = genresExcluded.join(',')
    updateSearchQuery(`?q=genre=${likedQuery}&genre_exclude=${excludedQuery}&order_by=score&sort=desc&limit=10`)
    updateLoading(false)
  }

  const StartSearch = () => (
    <button onClick={() => updateFormNum(1)}>Start your search</button>
  )

  const GenresLikedForm = () => (
    <div>
      <h1>What stuff do you like?</h1>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={async (values) => {
          updateGenresLiked(values.checked)
          updateFormNum(2)
          this.style
        }}
      >
        <Form>
          <div className="level" role="group" aria-labelledby="checkbox-group">
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="1" />Action</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="2" />Adventure</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="3" />Cars & Racing</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="4" />Comedy</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="5" />Mind-bending plots</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="6" />Demons & Demonic vibes</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="7" />Drama</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="8" />Ecchi (innuendo-based humour)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="9" />Fantasy</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="10" />Board/Card/Video Games</label>
            </div>
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="11" />Harem (Single male protagonist + female supporting cast)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="12" />Hentai [NSFW] ( ͡° ͜ʖ ͡°)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="13" />Historical</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="14" />Horror</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="15" />Josei (Marketed to women, realistic romance etc.)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="16" />Kids</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="17" />Magic</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="18" />Martial Arts</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="19" />Mecha (Mechs & Giant Robots)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="20" />Military</label>
            </div>
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="21" />Music</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="22" />Mystery</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="23" />Parody (Spoof comedy)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="24" />Police</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="25" />Psychological</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="26" />Romance</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="27" />Samurai</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="28" />School</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="29" />Sci-Fi</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="30" />Seinen (Marketed to mature men / mature themes)</label>
            </div> <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="31" />Shoujo (Marketed to young girls, unrealistic romance + magic)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="32" />Shoujo Ai (Intimate relationships between women) [SFW</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="33" />Shounen (Marketed to young boys, fighting/friendship/superpowers)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="34" />Shounen Ai (Intimate relationships between men) [SFW]</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="35" />Slice of Life (Just everyday things)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="36" />Space</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="37" />Sports</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="38" />Super Powers</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="39" />Supernatural</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="40" />Thriller</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="41" />Vampires</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="42" />Yaoi (Guy on guy action) [NSFW]</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="43" />Yuri (Girl on girl action) [NSFW]</label>
            </div>
          </div>
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  )

  const GenresExcludedForm = () => (
    <div>
      <h1>Anything you really want to avoid?</h1>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={async (values) => {
          updateGenresExcluded(values.checked)
          updateFormNum(3)
          createSearchQuery()
        }}
      >
        <Form>
          <div id='formTwo' className="level" role="group" aria-labelledby="checkbox-group">
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="1" />Action</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="2" />Adventure</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="3" />Cars & Racing</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="4" />Comedy</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="5" />Mind-bending plots</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="6" />Demons & Demonic vibes</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="7" />Drama</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="8" />Ecchi (innuendo-based humour)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="9" />Fantasy</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="10" />Board/Card/Video Games</label>
            </div>
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="11" />Harem (Single male protagonist + female supporting cast)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="12" />Hentai [NSFW] ( ͡° ͜ʖ ͡°)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="13" />Historical</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="14" />Horror</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="15" />Josei (Marketed to women, realistic romance etc.)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="16" />Kids</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="17" />Magic</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="18" />Martial Arts</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="19" />Mecha (Mechs & Giant Robots)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="20" />Military</label>
            </div>
            <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="21" />Music</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="22" />Mystery</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="23" />Parody (Spoof comedy)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="24" />Police</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="25" />Psychological</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="26" />Romance</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="27" />Samurai</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="28" />School</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="29" />Sci-Fi</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="30" />Seinen (Marketed to mature men / mature themes)</label>
            </div> <div>
              <label className="checkbox"><Field type="checkbox" name="checked" value="31" />Shoujo (Marketed to young girls, unrealistic romance + magic)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="32" />Shoujo Ai (Intimate relationships between women) [SFW</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="33" />Shounen (Marketed to young boys, fighting/friendship/superpowers)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="34" />Shounen Ai (Intimate relationships between men) [SFW]</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="35" />Slice of Life (Just everyday things)</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="36" />Space</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="37" />Sports</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="38" />Super Powers</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="39" />Supernatural</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="40" />Thriller</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="41" />Vampires</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="42" />Yaoi (Guy on guy action) [NSFW]</label>
              <label className="checkbox"><Field type="checkbox" name="checked" value="43" />Yuri (Girl on girl action) [NSFW]</label>
            </div>
          </div>
          <button type="submit">Next</button> <button onClick={() => updateFormNum(formNum - 1)}>Go back</button>
        </Form>
      </Formik>
      
    </div>
  )

  return <div>
    { formNum === 0 && <StartSearch />}
    { formNum === 1 && <GenresLikedForm />}
    { formNum === 2 && <GenresExcludedForm />}
    { formNum === 3 && <div><button onClick={() => updateFormNum(1)}> Restart </button> <Searches queryString={searchQuery} loading={loading} /></div>}
  </div>
}