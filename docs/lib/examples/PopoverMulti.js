/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Popover, PopoverBody } from 'reactstrap';

class PopoverItem extends React.Component {
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
      <span>
        <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} type="button">
          {this.props.item.text}
        </Button>
        <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen}
                 target={'Popover-' + this.props.id} toggle={this.toggle}>
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
      </span>
    );
  }
}

class PopoverExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'top',
          text: 'Top'
        },
        {
          placement: 'bottom',
          text: 'Bottom'
        },
        {
          placement: 'left',
          text: 'Left'
        },
        {
          placement: 'right',
          text: 'Right'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.popovers.map((popover, i) => {
          return <PopoverItem key={i} item={popover} id={i}/>;
        })}
      </div>
    );
  }
}

export default PopoverExampleMulti;
