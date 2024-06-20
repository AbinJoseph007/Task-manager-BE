const express = require('express')

const usercontroller = require('../Controller/UserController')

const taskcontroller = require('../Controller/TaskController')

const router = new express.Router()

//apis

router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.login)

router.post('/user/task/add',taskcontroller.addtask)

router.get('/user/alltask',taskcontroller.getalltask)

router.put('/task/update/:id',taskcontroller.updatetask)

router.delete('/task/delete/:id',taskcontroller.deleteTask)


module.exports = router