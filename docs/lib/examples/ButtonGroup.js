import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button color="primary">Left</Button>
          <Button color="secondary">Middle</Button>
          <Button color="danger">Right</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    );
  }
}
