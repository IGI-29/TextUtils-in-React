import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from 'react-router-dom';

function App(){

  const [alert,setAlert]=useState(null);

  const showAlert =(message,type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1200);
  }

  const [mode, setMode]=useState('light');

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
    }
    else
    {
      setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  }

  return(
    <div>

<Router>
<Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>

  <Route path="/about" element={<About mode={mode}/>}/>
  <Route path="/" 
  element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>}
  />
        
  </Routes>
  </Router>
</div>
  );
}

export default App;
