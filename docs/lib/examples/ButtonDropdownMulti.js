import React from 'react';
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

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
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color={this.props.color} caret>
          {this.props.text}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
          <DropdownItem>Label</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
