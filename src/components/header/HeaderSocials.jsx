import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christian-padierna-62715a180/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/cpadierna" target="_blank"><BsGithub/></a>
        {/* <a href="https://dribbble.com/cpadierna" target="_blank"><BsDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials