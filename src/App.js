import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from 'react';
import * as ReactDOM from "react-dom/client";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  // Defining the useState
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  //Defining all the methods
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been set", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been set", 'success');
    }
  }
  return (
    <>
      <Navbar title="Nextutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to convert to uppercase" />
        {/* <Router> */}
          {/* <div ><Link to='/textform'>textform</Link></div> */}
          {/* <Link to='/about'>About</Link> */}

          {/* <Routes> */}
            {/* <Route path='/textform' element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to convert to uppercase" />} />
          {<Route path='/about' element={<About />} />} */}

          {/* </Routes> */}
        {/* </Router> */}

      </div>
    </>
  )
}

export default App;