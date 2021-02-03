import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik'


export default function Panel() {
  const [searchQuery, updateSearchQuery] = useState('')
  const [genresLiked, updateGenresLiked] = useState([])
  const [genresExcluded, updateGenresExcluded] = useState([])
  const [ageratings, updateAgeratings] = useState([])

  console.log(genresLiked.join(','))

  // function queryBuilder() {

  // }

  // console.log(e.id)
  // console.log(e)
  // console.log(type)
  // console.log(name)

  

  const GenresLikedForm = () => (
    <div>
      <h1>What stuff do you like?</h1>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={async (values) => {
          // await sleep(500)
          // alert(JSON.stringify(values, null, 2))
          updateGenresLiked(values.checked)
          // console.log(genresLiked)
          // console.log(genresLiked.split(''))
        }}
      >
        <Form>
          <div role="group" aria-labelledby="checkbox-group">
            <label><Field type="checkbox" name="checked" value="1" />Action</label>
            <label><Field type="checkbox" name="checked" value="2" />Adventure</label>
            <label><Field type="checkbox" name="checked" value="3" />Cars & Racing</label>
            <label><Field type="checkbox" name="checked" value="4" />Comedy</label>
            <label><Field type="checkbox" name="checked" value="5" />Mind-bending plots</label>
            <label><Field type="checkbox" name="checked" value="6" />Demons & Demonic vibes</label>
            <label><Field type="checkbox" name="checked" value="7" />Drama</label>
            <label><Field type="checkbox" name="checked" value="8" />Ecchi (innuendo-based humour)</label>
            <label><Field type="checkbox" name="checked" value="9" />Fantasy</label>
            <label><Field type="checkbox" name="checked" value="10" />Board/Card/Video Games</label>
            <label><Field type="checkbox" name="checked" value="11" />Harem (Single male protagonist + female supporting cast)</label>
            <label><Field type="checkbox" name="checked" value="12" />Hentai [NSFW] ( ͡° ͜ʖ ͡°)</label>
            <label><Field type="checkbox" name="checked" value="13" />Historical</label>
            <label><Field type="checkbox" name="checked" value="14" />Horror</label>
            <label><Field type="checkbox" name="checked" value="15" />Josei (Marketed to women, realistic romance etc.)</label>
            <label><Field type="checkbox" name="checked" value="16" />Kids</label>
            <label><Field type="checkbox" name="checked" value="17" />Magic</label>
            <label><Field type="checkbox" name="checked" value="18" />Martial Arts</label>
            <label><Field type="checkbox" name="checked" value="19" />Mecha (Mechs & Giant Robots)</label>
            <label><Field type="checkbox" name="checked" value="20" />Military</label>
            <label><Field type="checkbox" name="checked" value="21" />Music</label>
            <label><Field type="checkbox" name="checked" value="22" />Mystery</label>
            <label><Field type="checkbox" name="checked" value="23" />Parody (Spoof comedy)</label>
            <label><Field type="checkbox" name="checked" value="24" />Police</label>
            <label><Field type="checkbox" name="checked" value="25" />Psychological</label>
            <label><Field type="checkbox" name="checked" value="26" />Romance</label>
            <label><Field type="checkbox" name="checked" value="27" />Samurai</label>
            <label><Field type="checkbox" name="checked" value="28" />School</label>
            <label><Field type="checkbox" name="checked" value="29" />Sci-Fi</label>
            <label><Field type="checkbox" name="checked" value="30" />Seinen (Marketed to mature men / mature themes)</label>
            <label><Field type="checkbox" name="checked" value="31" />Shoujo (Marketed to young girls, unrealistic romance + magic)</label>
            <label><Field type="checkbox" name="checked" value="32" />Shoujo Ai (Intimate relationships between women) [SFW</label>
            <label><Field type="checkbox" name="checked" value="33" />Shounen (Marketed to young boys, fighting/friendship/superpowers)</label>
            <label><Field type="checkbox" name="checked" value="34" />Shounen Ai (Intimate relationships between men) [SFW]</label>
            <label><Field type="checkbox" name="checked" value="35" />Slice of Life (Just everyday things)</label>
            <label><Field type="checkbox" name="checked" value="36" />Space</label>
            <label><Field type="checkbox" name="checked" value="37" />Sports</label>
            <label><Field type="checkbox" name="checked" value="38" />Super Powers</label>
            <label><Field type="checkbox" name="checked" value="39" />Supernatural</label>
            <label><Field type="checkbox" name="checked" value="40" />Thriller</label>
            <label><Field type="checkbox" name="checked" value="41" />Vampires</label>
            <label><Field type="checkbox" name="checked" value="42" />Yaoi (Guy on guy action) [NSFW]</label>
            <label><Field type="checkbox" name="checked" value="43" />Yuri (Girl on girl action) [NSFW]</label>
          </div>
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  )

  const GenresExcludedForm = () => (
    <div>
      <h1>Anything you want to avoid?</h1>
      <Formik
        initialValues={{
          checked: []
        }}
        onSubmit={async (values) => {
          // await sleep(500)
          // alert(JSON.stringify(values, null, 2))
          updateGenresExcluded(values.checked)
          // console.log(genresLiked)
          // console.log(genresLiked.split(''))
        }}
      >
        <Form>
          <div role="group" aria-labelledby="checkbox-group">
            <label><Field type="checkbox" name="checked" value="1" />Action</label>
            <label><Field type="checkbox" name="checked" value="2" />Adventure</label>
            <label><Field type="checkbox" name="checked" value="3" />Cars & Racing</label>
            <label><Field type="checkbox" name="checked" value="4" />Comedy</label>
            <label><Field type="checkbox" name="checked" value="5" />Mind-bending plots</label>
            <label><Field type="checkbox" name="checked" value="6" />Demons & Demonic vibes</label>
            <label><Field type="checkbox" name="checked" value="7" />Drama</label>
            <label><Field type="checkbox" name="checked" value="8" />Ecchi (innuendo-based humour)</label>
            <label><Field type="checkbox" name="checked" value="9" />Fantasy</label>
            <label><Field type="checkbox" name="checked" value="10" />Board/Card/Video Games</label>
            <label><Field type="checkbox" name="checked" value="11" />Harem (Single male protagonist + female supporting cast)</label>
            <label><Field type="checkbox" name="checked" value="12" />Hentai [NSFW] ( ͡° ͜ʖ ͡°)</label>
            <label><Field type="checkbox" name="checked" value="13" />Historical</label>
            <label><Field type="checkbox" name="checked" value="14" />Horror</label>
            <label><Field type="checkbox" name="checked" value="15" />Josei (Marketed to women, realistic romance etc.)</label>
            <label><Field type="checkbox" name="checked" value="16" />Kids</label>
            <label><Field type="checkbox" name="checked" value="17" />Magic</label>
            <label><Field type="checkbox" name="checked" value="18" />Martial Arts</label>
            <label><Field type="checkbox" name="checked" value="19" />Mecha (Mechs & Giant Robots)</label>
            <label><Field type="checkbox" name="checked" value="20" />Military</label>
            <label><Field type="checkbox" name="checked" value="21" />Music</label>
            <label><Field type="checkbox" name="checked" value="22" />Mystery</label>
            <label><Field type="checkbox" name="checked" value="23" />Parody (Spoof comedy)</label>
            <label><Field type="checkbox" name="checked" value="24" />Police</label>
            <label><Field type="checkbox" name="checked" value="25" />Psychological</label>
            <label><Field type="checkbox" name="checked" value="26" />Romance</label>
            <label><Field type="checkbox" name="checked" value="27" />Samurai</label>
            <label><Field type="checkbox" name="checked" value="28" />School</label>
            <label><Field type="checkbox" name="checked" value="29" />Sci-Fi</label>
            <label><Field type="checkbox" name="checked" value="30" />Seinen (Marketed to mature men / mature themes)</label>
            <label><Field type="checkbox" name="checked" value="31" />Shoujo (Marketed to young girls, unrealistic romance + magic)</label>
            <label><Field type="checkbox" name="checked" value="32" />Shoujo Ai (Intimate relationships between women) [SFW</label>
            <label><Field type="checkbox" name="checked" value="33" />Shounen (Marketed to young boys, fighting/friendship/superpowers)</label>
            <label><Field type="checkbox" name="checked" value="34" />Shounen Ai (Intimate relationships between men) [SFW]</label>
            <label><Field type="checkbox" name="checked" value="35" />Slice of Life (Just everyday things)</label>
            <label><Field type="checkbox" name="checked" value="36" />Space</label>
            <label><Field type="checkbox" name="checked" value="37" />Sports</label>
            <label><Field type="checkbox" name="checked" value="38" />Super Powers</label>
            <label><Field type="checkbox" name="checked" value="39" />Supernatural</label>
            <label><Field type="checkbox" name="checked" value="40" />Thriller</label>
            <label><Field type="checkbox" name="checked" value="41" />Vampires</label>
            <label><Field type="checkbox" name="checked" value="42" />Yaoi (Guy on guy action) [NSFW]</label>
            <label><Field type="checkbox" name="checked" value="43" />Yuri (Girl on girl action) [NSFW]</label>
          </div>
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  )

  return <div>
    <p>test</p>
    <GenresLikedForm />
    <GenresExcludedForm />
  </div>

  // return <section>
  //   <div>
  //     <p>What genres do you like?</p>
  //     <div>
  //       <form onSubmit={handleLikedSubmit}>


  //         <input onChange={(e) => console.log(e.target.id)} type="checkbox" id="1" name="Action"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="2" name="Adventure"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="3" name="Cars"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="4" name="Comedy"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="5" name="Dementia"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="6" name="Demons"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="7" name="Mystery"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="8" name="Drama"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="9" name="Ecchi"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="10" name="Fantasy"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="11" name="Game"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="12" name="Hentai"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="13" name="Historical"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="14" name="Horror"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="15" name="Kids"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="16" name="Magic"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="17" name="Martial Arts"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="18" name="Mecha"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="19" name="Music"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="20" name="Parody"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="21" name="Samurai"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="22" name="Romance"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="23" name="School"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="24" name="Sci Fi"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="25" name="Shoujo"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="26" name="Shoujo Ai"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="27" name="Shounen"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="28" name="Shounen Ai"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="29" name="Space"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="30" name="Sports"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="31" name="Super Power"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="32" name="Vampire"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="33" name="Yaoi"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="34" name="Yuri"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="35" name="Harem"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="36" name="Slice Of Life"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="37" name="Supernatural"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="38" name="Military"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="39" name="Police"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="40" name="Psychological"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="41" name="Thriller"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="42" name="Seinen"></input>
  //         <input onChange={(e) => updateGenresLiked(e.id)} type="checkbox" id="43" name="Josei"></input>
  //       </form>
  //     </div>

  //   </div>

  // </section>



}