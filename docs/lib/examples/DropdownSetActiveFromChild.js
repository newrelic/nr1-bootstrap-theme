import React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from 'reactstrap';

export default function Example() {
  return (
    <Navbar color="light" light expand="md">
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Inactive Link</NavLink>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
}
