import Button from './Button'
import Logo from "../assets/img/Logo.png"
import { Link } from 'react-router-dom'

const Navbar = () =>  {
  return (
<div className="navbar bg-base-100 px-[100px]">
  <div className="flex-1">
    <Link to="/" className="cursor-pointer"><img className='w-[250px]' src={Logo} alt="" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2 items-center">
      <li><Link to="/">Home</Link></li>
      <li><Link to="">Browse Jobs</Link></li>
      <Link to=""><Button label="Sign up"/></Link>
    </ul>

  </div>
</div>
  )
}

export default Navbar
