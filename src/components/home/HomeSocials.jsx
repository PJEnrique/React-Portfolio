import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoUpwork} from 'react-icons/bi'

const HomeSocials = () => {
  return (
    <div className='home__socials'>
        <a href="https://www.facebook.com/profile.php?id=100010806076949" target="_blank"><BsFacebook/></a>
        <a href="https://www.linkedin.com/in/patrick-josh-antonio-036372266/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.upwork.com/freelancers/~01d983010dd1d576b8" target="_blank"><BiLogoUpwork/></a>
    </div>
  )
}

export default HomeSocials