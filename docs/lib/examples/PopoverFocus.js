/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, PopoverBody, UncontrolledPopover } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button id="PopoverFocus" type="button">
          Launch Popover (Focus)
        </Button>
        {' '}
        <Button id="PopoverClick" type="button">
          Launch Popover (Click)
        </Button>
        {' '}
        <Button id="PopoverLegacy" type="button">
          Launch Popover (Legacy)
        </Button>
        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
          <PopoverBody>
            <ul>
              <li>Label</li>
              <li>Label</li>
              <li>Label</li>
              <li className='active'>Label</li>
              <li>Label</li>
            </ul>
          </PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
          <PopoverBody>
            <ul>
              <li>Label</li>
              <li>Label</li>
              <li>Label</li>
              <li className='active'>Label</li>
              <li>Label</li>
            </ul>
          </PopoverBody>
        </UncontrolledPopover>
        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
          <PopoverBody>
            <ul>
              <li>Label</li>
              <li>Label</li>
              <li>Label</li>
              <li className='active'>Label</li>
              <li>Label</li>
            </ul>
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}
