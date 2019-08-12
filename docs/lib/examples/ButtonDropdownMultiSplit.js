import React from 'react';
import { Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

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
        <Button id="caret" color={this.props.color}>{this.props.text}</Button>
        <DropdownToggle split color={this.props.color}/>
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
