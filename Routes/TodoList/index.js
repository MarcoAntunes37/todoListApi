module.exports = app => {
    const todoList = require('../../Controller/TodoList')
    var router = require("express").Router();

    router.post("/new", todoList.saveData);
    router.get("/", todoList.findAll);
    router.get("/:id", todoList.findById);
    router.put("/update/:id", todoList.update);
    router.delete("/delete/:id", todoList.delete);


    app.use("/api/lists", router);
}