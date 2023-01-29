import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiMaterialui} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {BsFillGearFill} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiCommandLine} from 'react-icons/hi2'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrapFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className='experience__details-icon'/>
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Other Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className='experience__details-icon'/>
                <div>
                  <h4>Node</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaPython className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <AiOutlineConsoleSql className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillGearFill className='experience__details-icon'/>
                <div>
                  <h4>APIs</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsGithub className='experience__details-icon'/>
                <div>
                  <h4>Git/GitHub</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <HiCommandLine className='experience__details-icon'/>
                <div>
                  <h4>Unix Command Line</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Experience