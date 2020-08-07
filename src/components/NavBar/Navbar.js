import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavBarLinks = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">african funk &amp; jazz</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Icons</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>
    </div>
  );
}

export default NavBarLinks;