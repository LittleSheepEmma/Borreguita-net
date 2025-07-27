import React from 'react'

interface ProjectItemProps {
  name: string
  description: string
  repo: string
  languages: string[]
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  repo,
  languages
}) => {
  return (
    <div className="experience-item p-3 mb-2">
      <div className="text-center mb-2">
        <h3 className="project-name h5 mb-1">{name}</h3>
        <div className="languages small mb-2">
          {languages.join(' • ')}
        </div>
      </div>
      <p className="description mb-0 text-justify" style={{ textAlign: 'justify' }}>
        {description}
      </p>
      <div className="text-center mt-3">
        <a href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn btn btn-outline-light mb-3">
            <i className="bi bi-github me-2"></i>
            GitHub repo
        </a>
      </div>
    </div>
  )
}

export default ProjectItem
