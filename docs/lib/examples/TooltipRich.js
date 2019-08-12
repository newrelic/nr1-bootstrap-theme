/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { mapToCssModules, Tooltip } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFirstTooltip = this.toggleFirstTooltip.bind(this);
    this.toggleSecondTooltip = this.toggleSecondTooltip.bind(this);
    this.toggleThirdTooltip = this.toggleThirdTooltip.bind(this);
    this.state = {
      firstTooltipOpen: false,
      secondTooltipOpen: false,
      thirdTooltipOpen: false,
    };
  }

  toggleFirstTooltip() {
    this.setState({
      firstTooltipOpen: !this.state.firstTooltipOpen
    });
  }

  toggleSecondTooltip() {
    this.setState({
      secondTooltipOpen: !this.state.secondTooltipOpen
    });
  }

  toggleThirdTooltip() {
    this.setState({
      thirdTooltipOpen: !this.state.thirdTooltipOpen
    });
  }

  render() {
    const classes = 'rich-tooltip-inner';
    return (
      <div>
        <p>Somewhere in here is a{' '}
          <span style={{textDecoration: "underline", color: "blue"}}
                id="FirstRichTooltipExample">rich tooltip</span>,{' '}
          <span style={{textDecoration: "underline", color: "blue"}}
                id="SecondRichTooltipExample">rich tooltip without title</span>,{' '}
          <span style={{textDecoration: "underline", color: "blue"}}
                id="ThirdRichTooltipExample">rich tooltip with content only</span>
          .</p>
        <Tooltip placement="right" isOpen={this.state.firstTooltipOpen} target="FirstRichTooltipExample"
                 toggle={this.toggleFirstTooltip}
                 innerClassName={classes} fade={false}>

          <div className="title">
            Tooltip title
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus illo ipsum magni nam nihil,
            perferendis
            praesentium quae ratione sed! A ab at consequuntur cumque deserunt excepturi hic perspiciatis sed sequi?
          </div>
          <div className="actions">
            <a href="/">Some link</a>
          </div>

        </Tooltip>
        <Tooltip placement="right" isOpen={this.state.secondTooltipOpen} target="SecondRichTooltipExample"
                 toggle={this.toggleSecondTooltip}
                 innerClassName={classes} fade={false}>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci distinctio dolorem eligendi
            ex expedita fugiat illum impedit incidunt laborum maiores maxime non nostrum, officiis omnis optio
            repudiandae rerum.
          </div>
          <div className="actions">
            <a href="/">Some link</a>
          </div>


        </Tooltip>
        <Tooltip placement="top-start" isOpen={this.state.thirdTooltipOpen} target="ThirdRichTooltipExample"
                 toggle={this.toggleThirdTooltip}
                 innerClassName={classes} fade={false}>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi maiores molestiae nisi placeat quam
            ullam.
            Architecto consequatur ex expedita labore, laboriosam praesentium ratione saepe. Beatae enim error itaque
            quos sed.
          </div>

        </Tooltip>


      </div>
    );
  }
}



