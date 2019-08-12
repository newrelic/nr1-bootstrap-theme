import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} {...this.props}>
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
      </Dropdown>
    );
  }
}
