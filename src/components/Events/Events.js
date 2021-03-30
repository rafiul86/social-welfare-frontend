import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
const Events = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgURL , setImgURL] = useState(null)
    const onSubmit = (data) => {
        const eventInfo = {
            name : data.name,
            imgURL : imgURL
        }
        const url = 'https://safe-garden-90111.herokuapp.com/addEvent';
        fetch(url,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(eventInfo)
        })
        .then(res => console.log('server side responded'))
    }
    const handleImageUpload =(event) =>{
         const imageData = new FormData();
        imageData.set('key' ,'34ff8623370722d9b8033e7b71cda4e5')
        imageData.append('image' , event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
        
          .then(function (response) {
            setImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <h1>This is Events</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name"  ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Events;