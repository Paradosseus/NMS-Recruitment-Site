import Button from './Button'
import Logo from "../assets/img/Logo.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () =>  {
  const navigate = useNavigate()

  const goToJobsPage = () => {
    navigate("/jobs")
  }

  return (
<div className="navbar bg-base-100 px-[100px]">
  <div className="flex-1">
    <Link to="/" className="cursor-pointer"><img className='w-[250px]' src={Logo} alt="" /></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2 items-center">
      <li><Link to="/">Home</Link></li>
      <li><button onClick={goToJobsPage}>Jobs</button></li>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-primary text-custom-content-color">Account</div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a href='/SignIn'>Sign In</a></li>
          <li><a href='/Register'>Create Account</a></li>
        </ul>
      </div>
    </ul>

  </div>
</div>
  )
}

export default Navbar
