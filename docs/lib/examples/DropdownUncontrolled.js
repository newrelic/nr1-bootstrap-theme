import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

export default function Example() {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Label</DropdownItem>
        <DropdownItem>Label</DropdownItem>
        <DropdownItem>Label</DropdownItem>
        <DropdownItem>Label</DropdownItem>
        <DropdownItem>Label</DropdownItem>
        <DropdownItem>Label</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
