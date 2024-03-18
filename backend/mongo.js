import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/itodo")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const newSchema = new mongoose.Schema({
  //   fullName: {
  //     type: String,
  //     required: true,
  //   },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: [todoSchema],
});
const User = mongoose.model("User", newSchema);
export { User };
