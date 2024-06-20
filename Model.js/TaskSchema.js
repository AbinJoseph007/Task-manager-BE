const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
      type:String,
      require:true
    },
    state:{
        type:String,
        require:true
    }
})


const tasks = mongoose.model("tasks" , TaskSchema)

//export
module.exports = tasks