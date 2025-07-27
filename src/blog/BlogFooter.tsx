import './Blog.css'

function BlogFooter() {
  return (
    <footer className="blog-footer text-center mt-5">
      <div className="social-icons mb-3">
        <a href="https://www.instagram.com/mundoborrego" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram social-icon"></i>
        </a>
        <a href="https://www.twitch.tv/mundoborrego" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitch social-icon"></i>
        </a>
      </div>
      <div className="rss-icon mb-2">
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-rss rss-icon-img" style={{ fontSize: 24, color: '#ff69b4' }}></i>
        </a>
      </div>
      <p className="text-black-50 small pb-3">
        © 2025 Borreguita.net, MundoBorrego
      </p>
    </footer>
  )
}

export default BlogFooter
