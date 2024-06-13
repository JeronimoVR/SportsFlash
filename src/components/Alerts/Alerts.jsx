import React from "react";
import Alert from 'react-bootstrap/Alert';

function CustomAlert({ type, message }) {
  return (
    <Alert variant={type}>
      {message}
    </Alert>
  );
}

export default CustomAlert;
