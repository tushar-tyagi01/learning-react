import { useState } from "react";
import "./App.css";
// import About from './MyComponents/About';
import Header from "./MyComponents/Header";
import TextForm from "./MyComponents/TextForm";
import Alert from "./MyComponents/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 500);
  };

  const [alert, setalert] = useState(null);
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.querySelector("body").style.backgroundColor = "White";

      showalert("Dark mode has been enabled", "Success");
    } else {
      setmode("dark");
      document.querySelector("body").style.backgroundColor = "grey";

      showalert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Header title="Textutil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze." mode={mode} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
