import React, { useState } from 'react'
import "./navbar.css"
import {logo} from "./imports"
import {GrFormClose} from "react-icons/gr"
import {GrMenu} from "react-icons/gr"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className=''>
        <div className='nav'>

          <img src= {logo} className = "logo"></img>

            <ul className='nav-list-ul'>
                <a href='#home'><li>Home</li></a>
                <a href='#about'><li>About us</li></a>
                <a href='#catalog'><li>Catalog</li></a>
                <a href='#contact-us'><li>Contact us</li></a>
            </ul>

            <div className='responsive-div'>
              {toggle 
              ? <GrFormClose size={30} onClick = {() => setToggle(false)} /> 
              : <GrMenu size = {20} onClick= {() => setToggle(true)} />
            }

            {
              toggle && (
                <div className='nav-menu'>
                <ul>
                  <a><li>Home</li></a>
                  <a><li>About us</li></a>
                  <a><li>Catalog</li></a>
                  <a><li>Contact us</li></a>
                </ul>
                </div>
              )
            }
            
            </div>
        </div>
    </div>
  )
}

export default Navbar