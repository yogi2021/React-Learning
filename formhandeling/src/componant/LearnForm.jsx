// es7 extension react/redux

import React from 'react'
import {useState} from "react";

const LearnForm = ()=> {
   let [name, setName]=useState('')

   function handleChange(e){
    setName(e.target.value)
   }

   function handleSubmit(e){
    e.preventDefault();
    alert('Successfully submitted'+ name);
   }
   return(
    <>
     <form onSubmit={handleSubmit}>
        <lable htmlFor="">Name :</lable>
        <input type="text" id="name" value={name} onChange={handleChange}/>
        <br></br>
        <br></br>
     
       <button type="submit">Submit</button>
     </form>
        <h2> My name : {name}</h2>
    </>
   );
};
  export default LearnForm