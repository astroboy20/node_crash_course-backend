const express = require("express");
//3rd part middleware
const morgan = require("morgan");
//mongoose to connect to the database
const mongoose = require("mongoose");

const { render } = require("ejs");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//connect to mongodb
const dbURL =
  "mongodb+srv://tolulopeakinkunmi7:October19!@nodejs.2xlep.mongodb.net/nodejs_tutorials?retryWrites=true&w=majority&appName=nodejs";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log("connected to db");
    //port, listen for request when it is connected to the database
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// //mongoose and mono snadbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New blog",
//     snippet: "About the blog",
//     body: "This is about the blog",
//   });

//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => {
//       console.log(err);
//     });
// });

// //to get blog
// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// //for a sinlge blog
// app.get("/single-blog", (req, res) => {
//   Blog.findById("66e5479cc875cbf1a5098f91")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

//register view engine - we will be using ejs for the view enjine
app.set("view engine", "ejs");
// app.set("views", "views")

//middleware for static files
app.use(express.static("public"));
//it takes the url data, and create an object of the data
app.use(express.urlencoded({ extended: true }));
//morgan middleware
app.use(morgan("dev"));

//a middleware that logs all the request made
app.use((req, res, next) => {
  console.log("New request made:");
  console.log("host", req.hostname);
  console.log("path", req.path);
  console.log("method", req.method);
  //after running the code above express doesnt know what to do, so we have to tell it to move on with a function called "next"
  next();
});

//test
app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});

//blog routes

app.use(blogRoutes);
