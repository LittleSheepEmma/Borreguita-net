import { Router, Link } from '@reach/router'
import Home from './home/Home'
import Blog from './blog/Blog'
import Portfolio from './portfolio/Portfolio'
import NotFound from './not-found/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Home path="/"></Home>
        <Blog path="/blog"></Blog>
        <Portfolio path="/portfolio"></Portfolio>
        <NotFound default></NotFound>
      </Router>
    </>
  )
}

export default App
 