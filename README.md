	
### Software Engineering Immersive

# Project 2 - Anime4Days

## Overview

This was the second development project, as part of my education with GA's Software Engineering Immersive bootcamp.

The taks was to **build a React application**, that **consumes a public API**.

We were put into pairs, and given 48-hours to complete the project, in a hackathon style format.

Due to a shared interest in Anime, we chose to consume the [Jikan API](https://jikan.moe/), which is an unofficial MyAnimeList API. 

Please check out our 48-our app here! [Anime4Days](https://raspanda.github.io/GA-Project2/)

### Anime4Days Intro


The app we created serves as a simple search engine, which fetches data on anime from the Jikan API and renders information on our page. A user is able to provide a search query in the client, so is able to search for any anime by name.



More interestingly, we have a recommendation functionality as well. The user is able to provide one or more genres of interest, and our app will then render recommendations based on the users' selection(s). The recommendations are based on MyAnimeList popularity, and the results are paginated so the user can explore the list in case they need want more suggestions!

### The Brief

Your app must:

* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app should include a router** - with several "pages".
* **Include wireframes** - that you designed before building the app.
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.

### Technologies & frameworks used

- HTML5
- CSS3
- Sass/SCSS
- ES6
- React.js
- Node.js
- Axios
- React Router
- Bulma
- MS Live Share (for development)

## Approach

### Agile working

This was the first project in which we needed to work within a group, in a remote environment. In order to work together, we used MS Visual Studio Live Share to pair-program together during working hours. This was done on Carl's device and I coding alongside remotely. After hours, we worked separately on small aspects of the app, and regrouped in the mornings in order to merge the work.

### 1. Fetching and storing data 

Key to this project, was consuming a public API. We accomplished this by utilising Axios to fetch the data and store it in an array within a state variable.

We set up the HTTP request to work with or without the user-submitted search query. The Jikan API was convenient for this as the query string could be simply added to the end of the request URL. Finally, by nesting the request in a useEffect, we could send requests whenever we needed to by updating another piece of state (loading).

```Javascript
  // ! State variable initialised as an empty array
  const [results, updateResults] = useState([])
  
  // ! Request nested in a useEffect, will re-run everytime we update the "loading" state
  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/search/anime${queryString}`)
      .then(({ data }) => {
        updateResults(data.results)
        updateReady(false)
      })
  }, [loading])
```

### 2. User-submissions & changing the search query 

The core functionality of our app was dependent on us changing the data that we are storing in the API. To do this, we provided two Formik forms in the client, in which the user can provide search parameters. This could be done either through a text-based search, or through the recommendation journey.

#### User search

This was the more straightforward way to amend the queryString variable, this simply required the user to type a term to search for, which we retrieved and then built a query with.

```Javascript
<Formik
  initialValues={{
    search: ''
  }}
  onSubmit={async (values) => {
  
  // ! On submit, createFilterQuery function gets called with search term
    createFilterQuery(values.search)
    updateFormNum(5)
  }}
>
  <div className="field is-grouped is-grouped-centered">
    <Form className="field is-grouped is-grouped-centered is-flex-direction-row">
    
    // ! User provides search term in field below
      <p className="control"><Field className="input" id="search" name="search" placeholder="Enter anime name.." /></p>
      <p className="control"><button className="button" type="submit">Search</button></p>
    </Form>
  </div>

</Formik>

// ! Search term then get's fed into the search query builder, and two other pieces of state get updated
// ! The query gets passed into the request, loading triggers the useEffect to send the request, and searchBarActive renders the component
  function createFilterQuery(filter) {
    updateSearchBarActive(true)
    updateSearchQuery(`?q=${filter}`)
    updateLoading(!loading)
  }

```

#### Recommendation journey

This was much more complicated, as it required a longer user journey. It also required a more complex method for the queryString building as well. We first took the user along a form-flow, which included a view with a large number of checkboxes. Once the user selected their boxes and proceeded, these boxes then were passed through to build the queryString.


The main reason we chose to use Formik forms, was due to how Formik provided the output from checkbox selections. Formik provides an array of checkbox values, which was very convenient for us as the Jikan API search parameters for Anime genre requires a series of comma-separated numbers (e.g. q=&page=1&genre=**1,4,6,7**&order_by=members). This meant that converting the Formik output for use in the queryString was relatively straightforward.

We then built a large Formik form, with a checkbox for each of the MyAnimeList genres. Each checkbox was given the corresponding genre id as a value.

```Javascript

// ! Below is the entire checkbox form which users can provide their genres of interest
<Formik
    initialValues={{
      checked: []
    }}
    // ! On submit, an array of the genre ids are stored in state
    onSubmit={async (values) => {
      updateGenresLiked(values.checked)
      updateFormNum(2)
    }}
  >
    <Form>
      <div className="level" role="group" aria-labelledby="checkbox-group">
        <div>
          <ul>
          // ! One checkbox was coded in per Anime genre, and ids were hardcoded as values
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
```

Due to the asyncronosity of the genresLiked state variable, we were unable to call all subsequent functions immediately. Therefore we needed to render an additional button in order to call the createSearchQuery function. This function triggers the actual request.

```Javascript

// ! Additional component which renders when the large checkbox form is submitted
  const ReadyToSubmit = () => (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <div className="field is-grouped is-grouped-centered">
            <button className="button is-primary" onClick={() => createSearchQuery()}>Get Suggestions!</button>
          </div>
        </div>
      </div>
    </div>
  )

// ! Function which built the final search query for use in the requests
  function createSearchQuery() {
    updateLoadMore(loadMore + 1)
    const pageNum = loadMore * 12
    // ! genresLiked was taken from the Formik output
    const likedQuery = genresLiked.join('&genre=')
    updateSearchQuery(`?q=&page=1&genre=${likedQuery}&order_by=members&sort=desc&limit=${pageNum}`)
    updateLoading(!loading)
    updateFormNum(3)
  }
```

While the forms are quite large and bulky, functionally they are quite dependable!

### 3. Rendering recommendation journey

Through the recommendation user journey, we used a piece of state to control the flow. This state variable was a number, and each time the user moved through the journey the state would increase by +1, which then rendered different components on the page.

```Javascript
	// ! submit button on the form, which moved the user along the journey
	<button className="button" onClick={() => updateFormNum(1)}>Get a Recommendation</button>

	// ! state variable which controlled the rendering flow
	const [formNum, updateFormNum] = useState(0)
	
	// ! the renders below, controlled by formNum state
	return <div>
	  {formNum === 0 && <StartSearch />}
	  {formNum === 1 && <div className="box"><GenresLikedForm /></div>}
	  {formNum === 2 && <div className="box"><GenresLikedForm /><ReadyToSubmit /></div>}
```
This was quite a simple, yet effective, way to render the different form components in order, all on the same page.

### 3. Rendering search results

Once the user completed either search journey, we needed to of course render the results. We did this by mapping through the fetched data array, and rendering simple cards on a page with a title and an image.


Importantly, we needed to store some information on each card. This information would then pass the id of the specific Anime to the next page, when the user clicks on any card. The purpose of this was then to send another request for that anime only, to render the page for that specific result.


The code for single results was relatively short and sweet! Firstly, for the search results cards, most lines were required for styling and layout purposes.

```Javascript
// ! mapping through results data array
{results.map(anime => {
  return <div key={anime.mal_id} className="column is-one-third-desktop is-half-tablet is-full-mobile">
  // ! state data to pass through to details pages
    <Link key={anime.mal_id}
      to={{
        pathname: `/GA-Project2/details/${anime.mal_id}`,
        state: {
          id: anime.mal_id,
          loading: loading
        }
      }}>
      // ! Cards with two pieces of content rendered with lines below
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
```
The once the user clicks through to a specific anime, a new request would be sent for that anime only. The new data would then be used to render a page for that Anime.


```Javascript
export default function Details({ location, ready }) {

// ! anime state here stores the fetched data for the anime
// ! loading here controls whether to render the page or the loader, as the page waits for the request
  const [anime, updateAnime] = useState({})
  const [loading, updateLoading] = useState(true)

// ! ready is passed through from the main results page, in order to trigger the useEffect and the request
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

// ! More Anime details are rendered below, including a full synopsis and even a trailer!

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
```

## Known bugs

- Due to the simplicity of most of the logic, there are no siginficant functionality bugs to report!
- A bug persists on the Anime details pages, if the anime has no trailer associated with it. If this is the case, a 404 page will render in the div instead.
- Small rendering issues persist on the search results page, due to different image sizes existing for each anime. This means the cards do not line up perfectly.


## Potential future features

- Functional Navbar. We originally planned to have navigation options in the Navbar, but were unable to create this.
- Responsiveness. The page overall is responsive, but some alignment issues exist on details pages.
- Additional recommendation complexity. Right now the recommendation engine we have is very simple, and additional options to add complexity to the queries could be explored!


## Conclusions

Overall, we are very happy with what we produced in 48-hours! We have a good looking page with custom fonts, which serves its' purpose very well. In addition, it's completely mobile-compatible! 

It was a massive learning experience for us in how to build a React app, and how to consume a public API. Importantly, we learned how to navigate and understand API documentation thouroughly, as we had some big difficulties mid-way through the project. This was down to not understanding how the specific endpoint we were using worked, but luckily we were able to fix this relatively quickly.

We hope you like our app, and are able to discover your next favourite Anime using it!

## Final credit goes to...

Thank you to [Klikster](https://www.deviantart.com/klikster) for our beautiful homepage image!