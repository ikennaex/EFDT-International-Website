import React from 'react'
import "./intro.css"
import {cargo} from "./imports"

const Intro = () => {
  return (
    <div className='intro' id='home'>
      <div className='text'>
        <div>
        </div>
        <h2>We are </h2>
        <h1>
          EFDT ARISE <br />INTERNATIONAL <br />LIMITED
        </h1>
        {/* <p>We are the best</p> */}
      <button className='cta-btn'>Contact us</button>
      </div>

      <div className='intro-img'>
        <img src= {cargo} ></img>
      </div>

    </div>
  )
}

export default Intro