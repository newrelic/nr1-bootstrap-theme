/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Button, PopoverBody, UncontrolledPopover } from 'reactstrap';

export default function () {
  return (
    <div>
      <Button id="UncontrolledPopover" type="button">
        Launch Popover
      </Button>
      <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
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
