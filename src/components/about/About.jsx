import React from 'react'
import './about.css'
import pic2_portfolio from '../../assets/pic2_portfolio.jpg'
import {FaAward} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {IoIosFolderOpen} from 'react-icons/io'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={pic2_portfolio} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 years</small>
            </article>

            <article className="about__card">
              <IoIosFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>

            <article className="about__card">
              <FaPython className="about__icon"/>
              <h5>Favorite Language</h5>
              <small>Python</small>
            </article>
          </div>
            <p>
              I started learning SQL in September 2022 and loved it! Once I learned the basics, I moved onto Python and fell deeper into my love of coding.
              My favorite part about coding is that it allows you to be a life long learner. New advancements are always to be found!
              I hope to keep developing my knowledge of web development.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default about