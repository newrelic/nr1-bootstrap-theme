import React from 'react';
import { Alert } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
      <Alert color="danger">
        This is a destructive alert — check it out!
      </Alert>
      <Alert color="light">
        This is a plain alert — check it out!
      </Alert>
    </div>
  );
};

export default Example;
