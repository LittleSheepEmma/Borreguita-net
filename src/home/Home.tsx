import { useEffect } from 'react'
import './Home.css'
import { type RouteComponentProps, Link } from '@reach/router'

interface HomeProps extends RouteComponentProps {}

function Home(props: HomeProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/js/snow.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="header text-center d-flex flex-column justify-content-center align-items-center">
      <div id="canvas-container">
        <canvas id="snow-canvas"></canvas>
      </div>

      <div className="body p-3">
        <img
          src="/img/borreguita.png"
          alt="Borreguita"
          className="profile-img mb-3"
        />

        <h1 className="welcome-text mb-2 my-3">¡Bienvenidos a mi pequeño mundo!</h1>

        <div className="social-links mb-4 py-2">
          <a
            href="https://www.twitch.tv/mundoborrego"
            className="btn btn-outline-dark me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitch"></i>
          </a>
          <a
            href="https://instagram.com/mundoborrego"
            className="btn btn-outline-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <div className="container text-center my-5">
          <div className="row justify-content-center g-4">
            <div className="d-flex flex-column flex-md-row
            justify-content-center align-items-center gap-3">
              <Link to="/blog" className="btn w-100 p-4 bigbtn">
                <i className="bi bi-controller me-2"></i>Blog
              </Link>
              
              <Link to="/portfolio" className="btn w-100 p-4 bigbtn">
                <i className="bi bi-briefcase-fill me-2"></i>Portafolio
              </Link>
            </div>
          </div>
        </div>

        <footer className="mt-auto text-black-50 small pb-3">
          © 2025 mundoborrego.com
        </footer>
      </div>
    </div>
  )
}

export default Home
