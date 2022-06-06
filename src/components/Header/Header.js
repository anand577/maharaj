import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

// const authenticatedOptions = (
//   <Fragment>
//     <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
//     <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
//     <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>
      Home
    </NavLink>
    <NavLink to='/about' className='nav-link'>
      About
    </NavLink>
    <NavLink to='/resume' className='nav-link'>
      Resume
    </NavLink>
    <NavLink to='/projects' className='nav-link'>
      Projects
    </NavLink>
    <NavLink to='/contact' className='nav-link'>
      Contact me
    </NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#1ef', textDecoration: 'none' }}>My Portfolio</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {user && (
          <span className='navbar-text mr-2'>Welcome</span>
        )}
        {alwaysOptions}
        {/* {user ? authenticatedOptions : authenticatedOptions} */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// import React from 'react'
// import { Link } from 'react-router-dom'

// function Header () {
//   return (
//     <nav className='header header-expand-lg header-light bg-light'>
//       <div className='container-fluid'>

//         <Link to='/' className='nav-brand'>Welcome To My Portfolio</Link>
//         <button
//           className='header-toggler'
//           type='button'
//           data-bs-toggle='collapse'
//           data-bs-target='header'>
//           {' '}
//           <span className='header-toggler-icon'></span>
//         </button>
//         <div className='collapse header-collapse' id='headerSupported Content'>
//           <ul className='header-nav me-auto mb-2 mb-1lg-0'>
//             <li className=' nav-item'>
//               <Link to='/' className='nav-link active'>Home</Link>
//             </li>
//             <li className=' nav-item'>
//               <Link to='/about' className='nav-link active'>About</Link>
//             </li>
//             <li className=' nav-item'>
//               <Link to='/resume' className='nav-link active'>Resume</Link>
//             </li>
//             <li className=' nav-item'>
//               <Link to='/projects' className='nav-link active'>Projects</Link>
//             </li>
//             <li className=' nav-item'>
//               <Link to='/contact' className='nav-link active'>Contact me</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default Header
