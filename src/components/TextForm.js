import React, {useState} from "react";
// import PropTypes from 'prop-types'

export default function TextForm(props){

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state  

    const handleUpClick = ()=>{
        console.log("Upper case was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        console.log("Lower case was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>{
        console.log("Clear was clicked " + text)
        let newText = ""
        setText(newText);
    }
    const handleRev = ()=>{
        console.log("Reverse was clicked " + text)
        let newText = text.split('').reverse().join('');
        setText(newText);
    }
    
    const handleRevStr = ()=>{
        console.log("Reverse String was clicked " + text)
        let newText = text.split(' ').reverse().join(' ');
        setText(newText);
    }
    
    const handleOnChange = (event)=>{
        console.log("Handle On Change");
        setText(event.target.value);
    }

    return(
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleRev}>Reverse</button>
            <button className="btn btn-primary mx-1" onClick={handleRevStr}>Invert String</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>

        </div>

        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Read in minutes</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
        </>
    )
}