import './App.css';
import  './users.json'
import Navbar from './Components/Navbar';

import Body from './Components/Body';
import Slider from './Components/Slider';

let data = require('./users.json');

var now = new Date().getTime();
var result={"users":[]};
var count=0;
for(let name in data["users"]){
  if(now<new Date(data["users"][name]["DOB"]).getTime()) {
    count=count+1;
      result["users"].push(data["users"][name]);
  }
}
for(var i=0; i<14-count; i++){
  result["users"].push(data["users"][i]);
}


function App() {
  return (<>
  <Navbar  title="Mysite"  />
  <Slider />
  <div className="container my-3">
    <Body users={result}/></div>

  

  </>
  );
}

export default App;
