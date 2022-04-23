import { useState } from "react"
import React  from 'react'



export default function Card(prop) {
    const [day, setDays] = useState(0);
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [bday, setBday] = useState(0);
    var myfunc = setInterval(function() {
        var countDownDate1 =new Date(prop.dob).getTime()
        var now = new Date().getTime();
        var timeleft = countDownDate1 - now;
        
        while(timeleft<0){
            timeleft=timeleft+1000*60*60*24*365;
        }

        var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var date=new Date(prop.dob).getDate()
        date=date+" "+month[new Date(prop.dob).getMonth()]
        setBday(bday=>date)
        
    
        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        setDays(day=>days)
        setHr(hr=>hours)
        setMin(min=>minutes)
        setSec(sec=>seconds)

    },1000)
  return (

<div className="col-md-3">

<div className="card" style={{width: "18rem"}}>
  <img src={prop.link} style={{height: "21rem"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prop.name} </h5>
    <p className="card-text"><b>Birth-Day </b>: {bday}</p>
    <p className="card-text"><b>Count down :</b><br/> {day} Ds {hr} Hs {min} Ms {sec} Ss</p>
    <a href="#" className="btn btn-primary">Go to Profile</a>
  </div>
</div>

</div>
  );} 

