import './App.css';
import { useState } from 'react';
import TextForm from './TextForm';
import AlertMessage from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './About';
import Navbar from './navbar';

function App() {
  const [mode, setMode] = useState('light')
const [alert, setAlert]  = useState(null)


const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(41, 49, 58)'
    document.body.style.color = 'rgba(255, 255, 255, 0.7)'
document.getElementById('input').style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
document.getElementById('input').style.color = 'white'

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.getElementById('input').style.backgroundColor = 'white'
    document.getElementById('input').style.color = 'black'

  }
}

const showAlert = (message, type) =>{
  setAlert({
message: message,
type: type
  })
  setTimeout(()=>{
    setAlert(null)
  }, 1500)
}
return (
  <Router>

  <>
  <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
 <AlertMessage alert={alert}/>

</div>    
 
        <Routes>

         <Route exact path='/about' element={<About mode={mode}/>} />
              <Route exact path="/" element={<TextForm mode={mode}  showAlert={showAlert} toggleMode={toggleMode}/>
}/>
        </Routes>
      
  </>
</Router>

  );
}

export default App;
