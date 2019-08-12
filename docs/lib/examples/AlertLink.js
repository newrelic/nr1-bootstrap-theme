import React from 'react';
import { Alert } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="secondary">
        This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="danger">
        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
      <Alert color="light">
        This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
      </Alert>
    </div>
  );
};

export default Example;
