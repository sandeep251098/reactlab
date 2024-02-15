import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import "./nav.css";
const Nav = () => {
  return (
    <div className='header'>
      <div className='top_header'>
        <div className='icon'><MdLocalShipping /></div>
        <div className='info'>
          <p>Free shipping when shipping up 10000</p>
        </div>
      </div>
      <div className='mid_header'>

        <div className='logo'>


          <h1 class="text-primary display-6">Fruitables</h1>

        </div>
        <div className='seach_box'>
          <input type='text' value="" placeholder='sarch'></input>
          <button><CiSearch /></button>
        </div>
        <div className='user'>
          <div className='icon'>
            <FiLogIn />
          </div>
          <div className='btn'>
            <button>Login</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav
