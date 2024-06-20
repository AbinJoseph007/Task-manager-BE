const tasks = require('../Model.js/TaskSchema');

exports.addtask = async (req, res) => {
  const { title, description, state } = req.body;
  
  try {
    if (!title || !description || !state) {
      return res.status(400).json("Fields are missing please fill completely");
    } else {
      const newTask = new tasks({
        title,
        description,
        state,
      });
      
      await newTask.save();
      return res.status(200).json(newTask);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
}


//get all tasks

exports.getalltask = async(req , res)=>{
    try {
       const alltasks=  await tasks.find()
       res.status(200).json(alltasks)
       
    } catch (err) {
      res.status(401).json(`request failed due to ${err}`) 
    }
 }


 //update tasks

 exports.updatetask = async (req, res) => {
  try {
      const { id } = req.params;
      const { title, description, state } = req.body;

      if (!id || !title || !description || !state) {
          return res.status(400).json('Please provide all required fields');
      }

      const updatedTask = await tasks.findByIdAndUpdate(id, {
          title,
          description,
          state
      }, { new: true });
      
      res.status(200).json(updatedTask);
  } catch (error) {
      res.status(500).json(error);
  }
}


 //delete task
 
 exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const removedTask = await tasks.findByIdAndDelete(id);

    res.status(200).json(removedTask );
  } catch (err) {
    res.status(500).json(err);
  }
};


