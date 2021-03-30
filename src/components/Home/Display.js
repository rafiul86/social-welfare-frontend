import React from 'react';

const Display = ({event}) => {
    const handleDelete =(id)=>{
        console.log(id)
        fetch(`http://localhost:5501/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    }
    return (
        <div className="col-md-3">
            <img style={{width : '300px'}} src={event.imgURL} alt=""/>
            <h3>{event.name} <button onClick= {()=>handleDelete(event._id)}>Delete</button></h3>
        </div>
    );
};

export default Display;