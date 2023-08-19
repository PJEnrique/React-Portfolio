import React from 'react'
import './Work.css'
import IMG1 from '../../assets/Concom12.png'
import IMG2 from '../../assets/myportfolio13.png'
import IMG3 from '../../assets/website14.png'




const Work = () => {
  return (
    <section id='work'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container work__container">
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h3>ConCom | Mobile App</h3>
          <small>Concom is an social media application that you can chat and post any images and quotes.</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG2} alt=""/>
          </div>
          <h3>MyPortfolio | Website</h3>
          <small>A portfolio website is an indispensable tool for creative professionals and individuals seeking to showcase their talents, skills, and accomplishments to the world.
                It serves as a digital portfolio, an online resume, and a personal branding platform, all rolled into one.
                Whether you're an artist, designer, photographer, writer, developer, or any other professional, a portfolio website is your virtual gallery, providing a captivating glimpse into your work and personality.</small>
        </article>
        <article className='work__item'>
          <div className="work__item-image">
            <img src={IMG3} alt=""/>
          </div>
          <h3>CITE Fest | Website</h3>
          <small>Website that you can see the pictures of the event in CITE 2022.</small>
        </article>
      </div>
    </section>
    
    

  )
}

export default Work