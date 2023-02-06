import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {

    return (
      <div style={{height: '10px'}}>
       { props.alert &&
      <Alert variant={props.alert.type}>
       
      <span>{props.alert.message}</span>
    
      </Alert>}
      </div>
    );
  
}

export default AlertMessage
