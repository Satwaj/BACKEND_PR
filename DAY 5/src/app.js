const e = require("express")
const express = require ("express")

const app = express()


module.exports= app


app.use(express.json())

const notes=[]

app.post('/notes',(req,res)=>{


  notes.push(req.body)


  res.status(201).json({message:"note post"})
})

app.get('/notes',(req,res)=>{



  res.status(200).json({

    notes:notes
  })
})

app.patch('/notes/:index',(req,res)=>{


  notes[req.params.index].title = req.body.title

  res.status(200).json({
    message:"notes updated"
  })
}
)