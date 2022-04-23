import React, {useState} from 'react'


export default function Textform() {
    const [text, setText] = useState();
   
    const upper=()=>{
        console.log("clicked");
        setText(text.toUpperCase());

    }
    const change=(event)=>{
        console.log("changed to "+event.target.value);
        setText(event.target.value);
    }
  return (<>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={upper}>Change to Uppercase</button>

</>
  )
}
