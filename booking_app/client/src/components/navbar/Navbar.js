import React, { useContext } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Toggle from '../toggle/Toggle'

const Navbar = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  }

  const handleLogin = () => {
    navigate("/login");
  }

  // const user_det = JSON.parse(localStorage.getItem("user"));
  // const UserName = user_det.otherDetails.username;

  // const logout = () => {
  //   navigate("/login")
  // }

  // console.log(user.username);

  return (
	  <div className='navbar'>
      <div className='navContainer'>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}><span className='logo'>Hotel Booking</span></Link>
        {user ? <Toggle username={"Shaik"} /> : (<div className='navItems'>
          <button onClick={handleRegister} className='navButton'>Register</button>
          <button onClick={handleLogin} className='navButton'>Login</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar