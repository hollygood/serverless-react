import React from 'react';
import { Alert } from 'react-bootstrap';
import './ErrorMessage.css';

export default ({
  message
}) =>
  <Alert bsStyle="danger">
    <p>
      <strong>Oops, you error an error!</strong><br />
      {message}
    </p>
  </Alert>
