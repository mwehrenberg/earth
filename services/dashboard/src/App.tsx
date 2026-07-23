import { useState } from 'react'
import cuteEarth from './assets/cuteEarth.webp'
import Journal from './Journal'
import './App.css'

function App() {
  const [page, setPage] = useState<'home' | 'journal'>('home')

  if (page === 'journal') {
    return <Journal onBack={() => setPage('home')} />
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={cuteEarth} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>earth</h1>
          <p>
            Let's starting building and learning
          </p>
        </div>
        <b></b>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="services">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Services</h2>
          <ul>
            <li>
              <button type="button" className="service"
                onClick={() => setPage('journal')}>
                Journal du Jour
              </button>
            </li>
          </ul>
        </div>
        </section>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={cuteEarth} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={cuteEarth} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Molly Wehrenberg</h2>
          <p>Join me on my journey</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/mollywehrenberg/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/mwehrenberg" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mollywehrenberg/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#instagram-icon"></use>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
