import React from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { Alert } from 'reactstrap';

export class AlertFadelessExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
          I am a primary alert and I can be dismissed without animating!
        </Alert>
      </div>
    );
  }
}

export function UncontrolledAlertFadelessExample() {
  return (
    <div>
      <UncontrolledAlert color="secondary" fade={false}>
        I am an alert and I can be dismissed without animating!
      </UncontrolledAlert>
    </div>
  );
}
