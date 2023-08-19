import React from 'react'
import './Education.css'
import ME from '../../assets/me-education.png'
import {FaSchool} from 'react-icons/fa'
import {IoSchoolOutline} from 'react-icons/io5'

const Education = () => {
  return (
    <section id='education'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container education__container">
        <div className="education__me">
          <div className="education__me-image">
            <img src={ME} alt="Education Image" />
          </div>
        </div>

        <div className="education__content">
            <div className="education__cards">
              <article className='education__card'>
                <FaSchool className='education__icon'/>
                <h5>School</h5>
                <small>University Of Pangasinan</small>
              </article>
              <article className='education__card'>
                <IoSchoolOutline className='education__icon'/>
                <h5>Undergraduate</h5>
                <small>3rd year college | 2023-2024</small>
              </article>
            </div>
            <p>I'm currently in my third year of college, studying Information Technology. I'm eager to apply what I've learned in a real-world company. My studies have given me a strong grasp of programming languages, software development, and system administration. 
              I love solving problems and keeping up with new tech trends. Through group projects, I've also learned how to work well with others. I'm excited to bring my enthusiasm and skills to a company that values innovation and growth in the IT field.</p>
        </div>
      </div>
    </section>
  )
}

export default Education