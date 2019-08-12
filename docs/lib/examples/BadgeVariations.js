import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="danger">Destructive</Badge>
        <Badge color="light">Plain</Badge>
      </div>
    );
  }
}
