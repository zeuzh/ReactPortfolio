import React from 'react'
import me from "../../assets/me.webp"

function About() {
  return (
    <>
    <img src={me} className='imgOfMe' alt="Headshot of jesse"/>
    <h1>About Me</h1>
    <p className='aboutMe'>Hi! My name is Jesse, I am a Web Developer based in Orlando, Florida. I mainly focus in the MERN tech stack, but am always looking for new stacks to play around with. I recently graduated with a certifcate in Full Stack Web Development from the University of Central Florida. During the bootcamp I was able to learn so much about best practices in web development, and overall how to learn better! In my free time I enjoy playing basketball, as well as racing my four-wheeler!</p>
    </>
  )
}

export default About