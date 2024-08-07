import Button from './Button'
import Logo from "../assets/img/Logo.png"
const Navbar = () =>  {
  return (
<div className="navbar bg-base-100 px-[100px]">
  <div className="flex-1">
    <a className="cursor-pointer"><img className='w-[250px]' src={Logo} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2 items-center">
      <li><a>Home</a></li>
      <li><a>Browse Jobs</a></li>
      <a href=""></a><Button label="Sign up"/>
    </ul>

  </div>
</div>
  )
}

export default Navbar
