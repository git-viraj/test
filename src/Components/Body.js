import React from 'react'
import Card from './Card';

export default function Body(prop) {
    return (
        <>
        <div className="row">
{
    prop.users.users.map((element)=>{
        return <div key={element.Name} className="col-md-3 my-3"> <Card link={element.link} name={element.Name} dob={element.DOB}/></div>


    })
}

</div>
        
        </>


    );}
