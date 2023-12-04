import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");

    }
    const clear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("text hasbeen cleared", "success");
    }
    const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clear}>clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            </div>
            <div className = "container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summery</h1>
                <p>{text.split(" ").length-1} words and {text.length} character</p>
                <p>{0.008*60*text.split(" ").length} seconds required to read the text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
