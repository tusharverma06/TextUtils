import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertMessage(props) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
        props.alert &&
      <Alert variant="success" onClose={() => setShow(false)} >
       
      <span>{props.alert.message}</span>
    
      </Alert>
    );
  }
}

export default AlertMessage