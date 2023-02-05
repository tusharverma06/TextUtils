import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function About(props) {

  return (
    <div className='container my-3'>
      <h1 style={{marginTop: '2rem'}}>About Us</h1>
    <Accordion className='my-3'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header >What is Text Utils?</Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='light'? 'white': 'rgb(41, 49, 58)', color: props.mode==='light'? 'black': 'rgba(255, 255, 255, 0.7)'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header>How to use it?</Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='light'? 'white': 'rgb(41, 49, 58)', color: props.mode==='light'? 'black': 'rgba(255, 255, 255, 0.7)'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}
