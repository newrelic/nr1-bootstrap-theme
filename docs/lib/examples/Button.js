import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="danger">destructive</Button>{' '}
      </div>
    );
  }
}
