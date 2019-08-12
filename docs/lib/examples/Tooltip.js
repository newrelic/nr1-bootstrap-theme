/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mapToCssModules, Tooltip } from 'reactstrap';

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
    const classes = 'tooltip-inner';
    return (
      <div>
        <p>Somewhere in here is a <span style={{textDecoration: "underline", color: "blue"}} href="#"
                                        id="TooltipExample">tooltip</span>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}
                 fade={false}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}
