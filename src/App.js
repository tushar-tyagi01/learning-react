import { useState } from 'react';
import './App.css';
// import About from './MyComponents/About';
import Header from './MyComponents/Header'; 
import TextForm from './MyComponents/TextForm';
import Alert from './MyComponents/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const [alert, setalert] = useState(null);
  const [switchText, setswitchText] = useState('Enable Dark Mode');
  const [mode, setmode] = useState('dark');

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.querySelector('body').style.backgroundColor = 'grey';
      setswitchText('Enable Light Mode');
      showalert("Dark mode has been enabled", "Success");
    } else {
      setmode('light');
      document.querySelector('body').style.backgroundColor = 'white';
      setswitchText('Enable Dark Mode');
      showalert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
     
        <Header title="Textutil" mode={mode} toggleMode={toggleMode} switchText={switchText} />
        <Alert alert={alert} />
        <div className='container'>
          <TextForm heading="Enter the text to analyze." mode={mode} />
       </div>
    </>
  );
}

export default App;
