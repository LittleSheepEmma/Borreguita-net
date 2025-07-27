import React from 'react'
import { Link } from '@reach/router'
import './Blog.css'

interface BlogNavProps {
  setFilter: React.Dispatch<React.SetStateAction<{
    year: number | null;
    month: number | null
  }>>
}
export

function BlogNav({ setFilter }: BlogNavProps) {
  return (
    <nav className="blog-nav">
      <h2 className="nav-title">Filtrar por:</h2>
      <div className="nav-links">
        <Link to="/blog/year" className="nav-link">Año</Link>
        <Link to="/blog/month" className="nav-link">Mes</Link>
      </div>
    </nav>
  )
}

export default BlogNav
