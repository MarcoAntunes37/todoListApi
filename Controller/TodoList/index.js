const TodoList = require('../../Model/TodoList')

exports.saveData = async (req, res) => {
  const list = new TodoList({
    title: req.body.title,
    type: req.body.type,
    description: req.body.description,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  })
  
  await list.save()
    .then(data => {
      res.status(200)
        .send(data)
    })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message
        });
    });
}

exports.findAll = async (req, res) => {
  await TodoList.find()
    .then(data => {
      res.status(200)
        .send(data);
    })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message
        })
    })
}

exports.findById = async (req, res) => {
  const id = req.params.id
  await TodoList.findById(id)
    .then(data => {
      res.status(200)
        .send(data);
    })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message
        })
    })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const list = {    
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    done: req.body.done
  }

  await TodoList.findOneAndUpdate(id, list)
    .then(data => {
      res.status(200)
        res.send({data})
    })
    .catch(err => {
      res.status(500)
        res.send({
          message: err
        })
    })
}

exports.delete = async (req, res) => {
  const id = req.params.id

  await TodoList.findByIdAndDelete(id)
  .then(data => {
    if(data){
      res.status(200)
      .send(data)
    }else{
      res.status(404)
    .send("Task not found")
    }
    
  })
}