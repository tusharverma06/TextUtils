import React from "react";
import { useState } from "react";

export default function TextForm(props){

    const [text, setText] = useState('');

    const handleClick = () =>{
      if(text.length>0){

        setText(text.toUpperCase())
        props.showAlert("✅Converted to uppercase", 'success')
      }else{
        props.showAlert('❌ TextBox is Empty', 'danger')
      }

    }
    const handleOnchange = (event) =>{
      setText(event.target.value)
    }
    const handlelowClick = () =>{
      if(text.length>0){

        setText(text.toLowerCase())
        props.showAlert("✅Converted to lowercase",'success')
      }else{
        props.showAlert('❌ TextBox is Empty', 'danger')
      }
    }
    const handleCopyClick = () =>{
      if(text.length>0){
        navigator.clipboard.writeText(text).then( props.showAlert("✅Copied to clipboard", 'success'));
        document.getElementById('input').select()
      }else{
        props.showAlert('❌ TextBox is Empty', 'danger')
      }
    }
    const handleDeleteClick = () =>{
      setText('')
    }

  
return(
    <>
   <div className="container" style={{marginTop: '3rem'}}>
      
      <label htmlFor="input"><h1 className='my-3'>Enter the Text to analyze</h1></label>
<textarea className='form-control'placeholder='Enter your text...' id='input' rows="10" value={text} onChange={handleOnchange} ></textarea>
  
  <button className={'btn btn-secondary my-3 mx-2'} onClick={handleClick}>Convert to Uppercase</button>
  <button className={'btn btn-secondary my-3 mx-2'} onClick={handlelowClick}>Convert to lowercase</button>
  <button className={ 'btn btn-secondary my-3 mx-2'} onClick={handleDeleteClick}>Clear</button>
  <button className={ 'btn btn-secondary my-3 mx-2'} onClick={handleCopyClick}><img src="https://cdn-icons-png.flaticon.com/512/54/54702.png" alt="" width={'20px'} style={{marginRight: '0.5rem'}}/>Copy Text</button>

      </div>
      <div className="container">
        <p>{text.split(' ').filter((elem)=>{return elem.length!=0}).length} words and {text.length} Characters</p>
      </div>

      <div className="container">
        <h2>Preview</h2>
        <p>{text.length>0 ? text: 'Enter something in textbox to preview it'}</p>

      </div>
      </>
)

}
