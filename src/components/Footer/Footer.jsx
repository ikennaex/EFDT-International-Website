import React from 'react'
import "./footer.css"
import {logo} from "../Navbar/imports"

const Footer = () => {
  const today = new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className='company-name'>
        <img src= {logo} className = "footer-logo" />
        <h1>EFDT ARISE <br/> INTERNATIONAL LIMITED</h1> 
        </div>

        <p>Copyright &copy; {today} </p>
      </div>
    </div>
  )
}

export default Footer