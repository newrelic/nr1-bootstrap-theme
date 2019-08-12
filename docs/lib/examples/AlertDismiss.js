import React from 'react';
import { Alert } from 'reactstrap';

class AlertExample extends React.Component {
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
      <>
        <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
        <Alert color="light" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert>
      </>
    );
  }
}

export default AlertExample;
