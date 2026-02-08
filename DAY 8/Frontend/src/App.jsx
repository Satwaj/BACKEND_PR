import React from 'react'
import axios from "axios" 
import { useState } from 'react'

const App = () => {


  const [notes, setNotes] = useState([
    
  {

    title:"test title 1",
    description:"test description"
  },

   {

    title:"test title 2",
    description:"test description"
   },

   {

    title:"test title 3",
    description:"test description"
  },
  
 {

    title:"test title 4",
    description:"test description"
  }


]);

axios.get(`http://localhost:3000/api/notes`)
.then((res)=>{
  setNotes(res.data.notes)
})





  axios.get(`http:/localhost:3000/api/notes`)
  .then(  )
  return (
    <div>
      <div className="notes">
        {notes.map(note=>{

          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );

           
        })
        
        }
       
      </div>
    </div>
  )
}

export default App
