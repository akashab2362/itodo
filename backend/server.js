import express from "express";
import cors from "cors";
import {User} from './mongo.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
});

app.post("/signup", async (req, res) => {
  const {/*fullName,*/ email, password } = req.body;
  const data = {
    // fullName: fullName,
    email: email,
    password : password
  }
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
      await User.insertMany([data]);
    }
  } catch (e) {
    res.json("not exist");
  }
});

//Endpoint to retrieve user's todos
app.get("/todos/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json(user.todos);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to add a todo for a user
app.post("/todos/:email", async (req, res) => {
  const { email } = req.params;
  const { todo, isCompleted } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.todos.push({ todo, isCompleted });
      await user.save();
      res.json(user.todos);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8000, ()=>{
    console.log(`Todo list listening on port ${8000}`);
})