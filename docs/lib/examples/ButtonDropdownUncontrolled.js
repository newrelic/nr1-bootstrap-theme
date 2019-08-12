/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <UncontrolledButtonDropdown>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  }
}
