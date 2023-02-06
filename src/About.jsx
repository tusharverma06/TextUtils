import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default function About(props) {

  return (
    <div className='container my-3'>
      <h1 style={{marginTop: '2rem'}}>About Us</h1>
    <Accordion className='my-3'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header >Analyze your text</Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='light'? 'white': 'rgb(41, 49, 58)', color: props.mode==='light'? 'black': 'rgba(255, 255, 255, 0.7)'}}>
        TextUtils gives you a way to analyze your text quickly & efficiently and lets you convert it to uppercase or lowercase.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" >
        <Accordion.Header>Free to use</Accordion.Header>
        <Accordion.Body style={{backgroundColor: props.mode==='light'? 'white': 'rgb(41, 49, 58)', color: props.mode==='light'? 'black': 'rgba(255, 255, 255, 0.7)'}}>
         TextUtils is a free character counter that provides instant character count & word count stats for a specific text. It reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}
