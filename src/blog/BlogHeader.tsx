import './Blog.css'

function BlogHeader() {
  return (
    <header className="blog-header text-center">
      <img src="/img/borreguita.png" alt="Profile" className="profile-img" />
      <div className="social-icons">
        <a href="https://instagram.com/mundoborrego" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram social-icon"></i>
        </a>
        <a href="https://www.twitch.tv/mundoborrego" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitch social-icon"></i>
        </a>
      </div>
    </header>
  )
}

export default BlogHeader
