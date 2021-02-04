import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return <main className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-size-1-mobile">Anime4Days</h1>
        <h2 className="subtitle is-size-6-mobile">Find your next favourite anime!</h2>
        <Link to={'/panel/'}>
          <button className="button">Search Now</button>
        </Link>
      </div>
    </div>
  </main>
}