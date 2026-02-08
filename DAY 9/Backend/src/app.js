const noteModel = require("./models/notes.model")


const express = require("express")

require("dotenv").config()


const app = express()

app.use(express.json())





module.exports = app