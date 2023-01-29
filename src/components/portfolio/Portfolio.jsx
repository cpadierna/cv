import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/simon.jpg'
import IMG4 from '../../assets/python1.jpg'
import IMG5 from '../../assets/python2.jpg'
import IMG6 from '../../assets/drum-kit.jpg'
import IMG7 from '../../assets/personalsite.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Note-Taking App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>To-Do List App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article> */}
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Personal Website in React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>GitHub API Call in Python Data Visualization</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>World Population in Python Data Visualization</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Simon Says in JavaScript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Drum Kit in JavaScript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio