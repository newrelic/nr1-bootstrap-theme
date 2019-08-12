/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" type="button">
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}
                 hideArrow={true}>
          <PopoverBody>
            <ul>
              <li>Label</li>
              <li>Label</li>
              <li>Label</li>
              <li className='active'>Label</li>
              <li>Label</li>
            </ul>

          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
