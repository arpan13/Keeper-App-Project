import React, { useState } from "react"

function CreateNote(props){
   const [inputNote,addNote]=useState({
       title:"",
       content:""
   })
   
   function handleClick(event){
    const {name,value}=event.target;
    addNote((prevValue=>{return {...prevValue,[name]:value}}));
        
    }

    function add(event){
        event.preventDefault();
        props.getNote(inputNote);
        addNote({
            title:"",
            content:""
        });
    }
        
    

    
   

   

   return (
       <div>
        <form >
            
                <input   onChange={handleClick} value={inputNote.title} name="title"   placeholder="Title" />
                <textarea onChange={handleClick} value={inputNote.content} name="content" placeholder="Take a note..." rows="3" />
         
            
            <button onClick={add}>Add</button>
        </form>
       </div>
   )
}


export default CreateNote;