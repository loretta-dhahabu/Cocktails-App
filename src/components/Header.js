import React from 'react'
import images  from '../images/logo1.jpg';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({onDarkModeClick, isDarkMode}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src={images} alt="logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="me-auto"> */}
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
    
  );
}
export default Header;

// export const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-center">
//         <Link to="/">
//           <img src={images} alt="cocktail logo" className="logo"></img>
//         </Link>
//         <ul className="nav-links">
//           <li>
//             <Link to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about">
//               About
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// } 
// export default Navbar;



