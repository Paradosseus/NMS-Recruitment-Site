import React from 'react'
import Button from './Button'
import Logo from "../assets/img/Logo.png"
export default function Navbar() {
  return (
<div className="navbar bg-base-100 px-[100px]">
  <div className="flex-1">
    <a className="btn btn-ghost"><img className='w-[250px]' src={Logo} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Browse Jobs</a></li>
    </ul>
    <a href=""></a><Button label="Sign up"/>
  </div>
</div>
  )
}
