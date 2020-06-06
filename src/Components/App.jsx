import React,{useState}from "react"
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes.js"
import CreateNote from "./createNote";

function App(){

  const [item, addNoteItem] = useState([]);

  function getNote(inputNote){
        
    
    addNoteItem(prevValue=>{
        return [
            ...prevValue,
            inputNote
        ]
    })

}
function deleteItem(id) {
  addNoteItem(prevItems => {
    return prevItems.filter((item, index) => {
      return index !== id;
    });
  });
}

   return(
     <div>
         <Header/>
         <CreateNote  getNote={getNote}/>
         {item.map((noteItem,index)=>(
          <Note key={index} id={index} onChecked={deleteItem} title={noteItem.title} content={noteItem.content}/>
         ))}
          
         
         <Footer />
     </div>  
    
)

}
export default App;
