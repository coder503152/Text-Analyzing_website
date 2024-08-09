import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        settext(newtext);

    }
    const handleOnChange = (event)=>{
        console.log("on chane encountered");
        settext(event.target.value);
    }
    const handleLoClick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleClearClick = ()=>{
        settext("");
    }
    const handlePalClick = ()=> {
    let reversedString = 
    text.split("").reduce((acc, char) => char + acc, "");
    if(reversedString == text)
        settext("The given text is a Palindrome");
    else
        settext("The given text is not a palindrome");
    }
    const [text, settext] = useState('enter text here');
  return (
   <>
   <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="button" onClick = {handleUpClick}  className="btn btn-primary">Convert to Uppercase</button>
        <button type="button" onClick = {handleLoClick}  className="btn btn-secondary mx-2">Convert To lowercase</button>
        <button type="button" onClick = {handleClearClick}  className="btn btn-secondary mx-2">Clear Text</button>
        <button type="button" onClick = {handlePalClick}  className="btn btn-secondary mx-2">Check If Palindrome</button>
    </div>
    <div>
            <p>Your Text Summary</p>
            <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    <h2> Preview</h2>
    <p>{text}</p>
  </>
  )
}
