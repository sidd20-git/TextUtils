import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] != undefined){
                joinedWords += elem + " ";
                console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Remove Extra spaces!", "success");
    }
    const handlecopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy Text!", "success");
 }
 const handleclear = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear Text!", "success");
}
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'> {props.heading} </h1>
            <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(47 46 52 / 50%)':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleLoClick}>Convert to Lowercasw</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleExtraSpaces}>Remove Extra spaces</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handlecopyText}>Copy Text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick = {handleclear}>Clear Text</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p> {text.length > 0? text : "Nothing to preview!"} </p>
        </div>
        </>
    )
}
