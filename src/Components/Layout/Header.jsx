import React, { useState } from 'react';
import "../Style/HeaderStyle.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png"


function Header() {


  const [nav, setnav] = useState(false);

  const changevalueonscroll = () => {
    const valuescroll = document?.documentElement?.scrollTop;
    valuescroll > 100 ? setnav(true) : setnav(false)
  }

  window.addEventListener("scroll", changevalueonscroll);



  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : "" }`} >
        <Container>
          <Navbar.Brand>
            <Link to="/" className='logo'>
              <img src={Logo} alt="LOGO" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contect">Contect</Nav.Link>
              <Nav.Link as={Link} to="/dark">Dark</Nav.Link>
              <Nav.Link as={Link} to="/add">A&R</Nav.Link>
              <Nav.Link as={Link} to="/lazy">L&S</Nav.Link>
              <Nav.Link as={Link} to="/w">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className='roundedpoint'>2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header