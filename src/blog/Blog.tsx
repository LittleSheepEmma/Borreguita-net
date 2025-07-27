import { type RouteComponentProps, Link } from '@reach/router'
import React, { useState } from 'react'
import BlogHeader from './BlogHeader'
import BlogNav from './BlogNav'
import BlogPost from './BlogPost'
import BlogFooter from './BlogFooter'
import './Blog.css'

interface BlogProps extends RouteComponentProps {}

function Blog(props: BlogProps) {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState<{
    year: number | null;
    month: number | null
  }>({ year: null, month: null })

  const filteredPosts = posts.filter(post => {
    return true
  })

  /* return (
    <div className="blog-container">
      <BlogHeader />
      <BlogNav setFilter={setFilter} />
      <div className="posts-container">
        {filteredPosts.map((post: any) => (
          <BlogPost key={post.id ?? ''} {...post} />
        ))}
      </div>
      <BlogFooter />
    </div>
  ) */

  return (
    <h1>Próximamente...</h1>
  )
}

export default Blog
