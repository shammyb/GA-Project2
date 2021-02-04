import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return <main className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Anime4Days</h1>
        <h2 className="subtitle">Find your next favourite anime!</h2>
        <button className="button">Start</button>
      </div>
    </div>
  </main>
}