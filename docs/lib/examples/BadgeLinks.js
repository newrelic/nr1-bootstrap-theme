import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge href="#" color="primary">Primary</Badge>
        <Badge href="#" color="secondary">Secondary</Badge>
        <Badge href="#" color="danger">Destructive</Badge>
        <Badge href="#" color="light">Plain</Badge>
      </div>
    );
  }
}
