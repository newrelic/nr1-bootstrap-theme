import React from 'react';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Badge color="primary" pill>Primary</Badge>
        <Badge color="secondary" pill>Secondary</Badge>
        <Badge color="danger" pill>Destructive</Badge>
        <Badge color="light" pill>Plain</Badge>
      </div>
    );
  }
}
