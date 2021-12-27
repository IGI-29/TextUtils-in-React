import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleonChange = (event) =>{
    
    setText(event.target.value);
  }

 const handleUpClick = (e)=>{
   e.preventDefault();

   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to Uppercase!","success");
 }
 
 const handleLowClick = (e)=>{
  e.preventDefault();

  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase!","success");
}

const handleClearClick = (e)=>{
  e.preventDefault();
  let newText="";
  setText(newText);
  props.showAlert("Text cleared!","success");
}

const handleCopy =() => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard!","success");
  }

const handleExtraSpaces=()=>{
  let newText =text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!","success");
  }


    return (
      <div>  
<div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>

  <textarea className="form-control"style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}} value={text}  onChange={handleonChange} id="myBox" rows="9"></textarea>

  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'info'} my-3`} onClick={handleUpClick}>Convert To Uppercase</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'info'} mx-4`} onClick={handleLowClick}>Convert To Lowercase</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'info'}`} onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'info'} mx-4`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'info'}`} onClick={handleCopy}>Copy Text</button>
</div>

<div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'black',color: props.mode==='light'?'black':'white'}}>
<h1>Your Text Summary</h1>
<ul>
<li><h5><b>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)}</b> Words and <b>{text.length}</b> Characters</h5></li>
<li><h5><b>{0.08*((text.split(/\s+/).filter((element)=>{return element.length!==0}).length))}</b> Minutes Average Read</h5></li>
</ul>
<br/><h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</div>
    )
}
