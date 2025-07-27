import React from 'react'
import { Link } from '@reach/router'
import './Blog.css'

interface BlogPostProps {
  title: string
  image: string
  content: string
  tags: string[]
}

const BlogPost: React.FC<BlogPostProps> = ({ title, image, content, tags }) => {
  const firstParagraph = content.split('\n')[0]

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <img src={image} alt={title} className="post-image" />
      <p>{firstParagraph}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`} className="read-more">
        Leer más
      </Link>
    </div>
  )
}

export default BlogPost
