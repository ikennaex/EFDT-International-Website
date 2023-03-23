import React from 'react'
import "./about.css"
import {foods} from "./import"

const About = () => {
  return (
    <div className='about-div' id='about'>
        <h2 className='about-text'>About us</h2>

        <div className='about' >
        <div className='img-div'>
            <img src= {foods}></img>
        </div>
        <div className='text-div'>
            <h2>Best Food Export Company In Nigeria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Reiciendis, ipsa repudiandae! Explicabo reiciendis quibusdam 
                id similique architecto impedit! Numquam minus facilis aliquid 
                quasi autem veritatis praesentium consequatur fuga at repellat.
            </p>
        </div>
        </div>

    </div>

  )
}

export default About