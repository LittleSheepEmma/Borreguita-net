import { type RouteComponentProps } from '@reach/router'
import { FaPython } from 'react-icons/fa'
import { SiPandas, SiTemporal } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { TbChartInfographic } from 'react-icons/tb'
import { SiDotnet } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import './Portfolio.css'
import { language } from '../utils/locales'
import ExperienceItem from './ExperienceItem'
import ProjectItem from './ProjectItem'
import { useState } from 'react'

interface PortfolioProps extends RouteComponentProps {}

type Language = 'en' | 'es'

function Portfolio(props: PortfolioProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')
  document.title = 'Portafolio de Emma Sánchez García'

  const translateDate = (date: string) => {
    if (currentLanguage === 'es') return date
    return date
      .replace('Enero', 'January')
      .replace('Febrero', 'February')
      .replace('Marzo', 'March')
      .replace('Abril', 'April')
      .replace('Mayo', 'May')
      .replace('Junio', 'June')
      .replace('Julio', 'July')
      .replace('Agosto', 'August')
      .replace('Septiembre', 'September')
      .replace('Octubre', 'October')
      .replace('Noviembre', 'November')
      .replace('Diciembre', 'December')
      .replace('Presente', 'Present')
  }

  return (
    <div className="portfolio-container">
      <aside className="sidebar">
        <div className="sidebar-content">
          <h1 className="name">Emma Sánchez García</h1>
          <h2 className="subtitle">{language[currentLanguage].softwareEngineer}</h2>
          <div className="social-links-pf">
            <a
              href="https://mx.linkedin.com/in/jose-ignacio-s%C3%A1nchez-garc%C3%ADa-a243422a7"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/LittleSheepEmma/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href={currentLanguage === 'es' ?  '/pub/cv.pdf' : '/pub/cv-en.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
            >
              <i className="bi bi-file-earmark-arrow-down-fill"></i> {language[currentLanguage].resumeDownload}
            </a>
          </div>
          <div className="language-switch mt-4">
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value as Language)}
              className="language-select"
            >
              <option value="es">🇲🇽 Español</option>
              <option value="en">🇺🇸 English</option>
            </select>
          </div>
        </div>
      </aside>
      <main className="content">
        <section id="about">
          <p>
            {language[currentLanguage].aboutMe}
          </p>
        </section>

        <section id="experience">
          <h2>{language[currentLanguage].experience}</h2>
          <div id="experienceCarousel" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#experienceCarousel" data-bs-slide-to="0"
              className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#experienceCarousel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ExperienceItem
                  company="Breinit"
                  dateRange={translateDate('Julio 2021 - Presente')}
                  position={currentLanguage === 'es' ? 'Ingeniera de Software' : 'Software Engineer'}
                  description={currentLanguage === 'es' 
                    ? 'Desarrolladora e ingeniera procesos ETL, software de automatización ' +
                    'y aplicaciones de inteligencia de negocios que satisfacen las necesidades ' +
                    'de grandes clientes y MIPYMES.'
                    : 'Developer of ETL pipelines, automation software and business intelligence ' +
                    'apps that meet the needs of large clients and small businesses alike.'}
                />
              </div>
              <div className="carousel-item">
                <ExperienceItem
                  company={currentLanguage === 'es'
                    ? 'Universidad Autónoma de Nuevo León'
                    : 'Autonomous University of Nuevo León'}
                  dateRange={translateDate("Agosto 2017 - Julio 2023")}
                  position={currentLanguage === 'es'
                    ? 'Ingeniería de software'
                    : 'B.S. of Software Engineering'}
                  description={currentLanguage === 'es'
                    ? 'Desarrollé prácticas relacionadas a algoritmos, desarrollo de software, ' + 
                    'machine learning e ingeniería de datos.'
                    : 'Completed coursework involving algorithms, software development, ' + 
                    'machine learning and data engineering.'}
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button"
            data-bs-target="#experienceCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
            data-bs-target="#experienceCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section id="skills">
          <h2>{language[currentLanguage].skills}</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <div className="skill-info">
                <FaPython className="icon" />
                <span>Python</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '98%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <SiPandas className="icon" />
                <span>Pandas</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '95%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <FaDatabase className="icon" />
                <span>MySQL, PostgreSQL</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '95%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <SiTensorflow className="icon" />
                <span>Tensorflow</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '65%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <TbChartInfographic className="icon" />
                <span>Power BI, Artus BI</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '95%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <SiDotnet className="icon" />
                <span>C#, .NET</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '75%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <FaHtml5 className="icon" />
                <span>HTML + CSS + JS</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '80%' } as React.CSSProperties}></div>
              </div>
            </li>
            <li className="skill-item">
              <div className="skill-info">
                <i className="bi bi-git"></i>
                <span>Git & GitHub</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ '--skill-level': '80%' } as React.CSSProperties}></div>
              </div>
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2>{language[currentLanguage].projects}</h2>
          <div id="projectsCarousel" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0"
              className="active" aria-current="true" aria-label="Project 1"></button>
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="1"
              aria-label="Project 2"></button>
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="2"
              aria-label="Project 3"></button>
              <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="3"
              aria-label="Project 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ProjectItem
                  name={currentLanguage === 'es'
                    ? 'Red neuronal artificial (RNA)'
                    : 'Artificial Neural Network (ANN)'}
                  description={currentLanguage === 'es'
                    ? 'Red neuronal para clasificar datos de predicción de problemas cardíacos ' +
                    'almacenados en un archivo CSV.'
                    : 'Neural network to classify data for predicting heart problems ' +
                    'stored in a CSV file.'}
                  repo="https://github.com/LittleSheepEmma/Red-Neuronal-Artificial"
                  languages={['Python', 'Tensorflow', 'Keras']}
                />
              </div>
              <div className="carousel-item">
                <ProjectItem
                  name={currentLanguage === 'es'
                    ? 'Cactus de sufijo'
                    : 'Suffix cactus'}
                  description={currentLanguage === 'es' 
                    ? 'Implementación de la estructura de datos llamada cactus de sufijo de acuerdo al paper '
                    + '"Suffix cactus: A cross between suffix tree and suffix array" '
                    + '(https://doi.org/10.1007/3-540-60044-2_43)'
                    : 'Implementation of the data structure called suffix cactus according to the paper '
                    + '"Suffix cactus: A cross between suffix tree and suffix array" '
                    + '(https://doi.org/10.1007/3-540-60044-2_43)'}
                  repo="https://github.com/LittleSheepEmma/Cactus-de-sufijo"
                  languages={['Python', 'Tkinter', 'Numpy']}
                />
              </div>
              <div className="carousel-item">
                <ProjectItem
                  name={currentLanguage === 'es'
                    ? 'Ruta más barata'
                    : 'Most efficient route'}
                  description={currentLanguage === 'es' 
                    ? 'Implementación de solución al problema del agente viajero '
                    + 'usando el método de inserción más barata'
                    : 'Implementation of a solution to the problem of the traveling salesman who finds the '
                    + 'most convenient route in terms of distance.'}
                  repo="https://github.com/LittleSheepEmma/Insercion-Mas-Barata"
                  languages={['Python', 'Tkinter', 'Matplotlib']}
                />
              </div>
              <div className="carousel-item">
                <ProjectItem
                  name={currentLanguage === 'es'
                    ? 'Ruta más lejana'
                    : 'Furthest route'}
                  description={currentLanguage === 'es' 
                    ? 'Resolución al problema del agente viajero con el método de inserción más lejana'
                    : 'Solution to the traveling salesman problem using the furthest insertion method'}
                  repo="https://github.com/LittleSheepEmma/Insercion-Mas-Lejana"
                  languages={['Python', 'Tkinter', 'Matplotlib']}
                />
              </div>
            </div>
            <button className="carousel-control-prev" type="button"
            data-bs-target="#projectsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button"
            data-bs-target="#projectsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section id="contact">
          <h2>{language[currentLanguage].contact}</h2>
          <p>{language[currentLanguage].contactInfo}</p>
          <div className="contact-container">
            <div className="email-display-container">
              <input 
                type="text" 
                value="jisanchezg99@gmail.com" 
                className="email-display" 
                readOnly 
              />
              <div className="contact-actions">
                <a 
                  href="mailto:jisanchezg99@gmail.com" 
                  className="contact-btn"
                  title={language[currentLanguage].sendEmail}
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <button 
                  className="contact-btn"
                  onClick={() => {
                    navigator.clipboard.writeText("jisanchezg99@gmail.com")
                  }}
                  title={language[currentLanguage].copyToClipboard}
                >
                  <i className="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Portfolio
