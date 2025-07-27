import React from 'react'

interface ExperienceItemProps {
  company: string
  dateRange: string
  position: string
  description: string
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  dateRange,
  position,
  description
}) => {
  return (
    <div className="experience-item p-3 mb-2">
      <div className="text-center mb-2">
        <h3 className="company-name h5 mb-1">{company}</h3>
        <div className="date-range small">{dateRange}</div>
        <div className="position fw-bold mb-2">{position}</div>
      </div>
      <p className="description mb-0 text-justify" style={{ textAlign: 'justify' }}>
        {description}
      </p>
    </div>
  )
}

export default ExperienceItem
