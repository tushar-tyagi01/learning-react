import React,{useState} from "react";
export default function TextForm(props){
  const handleclearClick=(event)=>{
    settext("")
  }
    const handleUpClick= () =>{
       console.log("Changed to UpperCase"+ text);
       let newtext=text.toUpperCase();
       settext(newtext);
    }
    const handleLoClick= () =>{
       console.log("Changed to Lowercase"+ text);
       let newtext=text.toLowerCase();
       settext(newtext);
    }
    const handleOnChange= (event) =>{
       console.log("Changed to Onchange");
       settext(event.target.value);
    }

    const[text,settext]=useState('Enter text');
    return(
      <>
       
        <form>
            
  <div className="mb-3" style={{color:props.mode=='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <input type="textarea" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=='dark'?'grey':'White',color:props.mode=='dark'?'white':'black'}} id="boxarea"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text" ></div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick} >Covert To Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleLoClick} >Covert To Lowercase</button>
   <button className="btn btn-primary mx-2" onClick={handleclearClick} >Clear Text</button>
     
     
  </div>
</form>
<div className="container" style={{color:props.mode=='dark'?'white':'black'}}>
  <h1>
    Your Text Summary
  </h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <h2>Preview
  </h2>
  <p>{text}</p>
</div>
</>
    )
}