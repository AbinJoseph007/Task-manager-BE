require('dotenv').config()

const express = require('express')

const cors = require('cors')

const Taskmanager = express()

const router = require('./Router/Router')


require('./DataBase.js/Connection')


Taskmanager.use(cors())

Taskmanager.use(express.json())

Taskmanager.use(router)


const PORT = 8000 || process.env.PORT

Taskmanager.listen(PORT,()=>{
    console.log(`server running succesfully in this port : ${PORT}`);
})