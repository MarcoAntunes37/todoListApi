const mongoose = require('mongoose')
const express = require("express");
const cors = require("cors")

require('dotenv').config()

const app = express();

const corsOpt ={
  origin: '*',
}

app.use(cors(corsOpt))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const URI = process.env.DB_URI

mongoose.connect(URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to ToDoList App"
  })
})

require("./Routes/TodoList")(app);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});