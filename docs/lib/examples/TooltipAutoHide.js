/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Tooltip } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Sometimes you need to allow users to select text within a <span
          style={{textDecoration: "underline", color: "blue"}} href="#" id="DisabledAutoHideExample">tooltip</span>.</p>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample"
                 toggle={this.toggle} fade={false}>
          Try to select this text!
        </Tooltip>
      </div>
    );
  }
}
