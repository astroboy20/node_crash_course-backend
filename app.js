const express = require("express");
//3rd part middleware
const morgan = require("morgan")

//express app
const app = express();

//register view engine - we will be using ejs for the view enjine
app.set("view engine", "ejs");
// app.set("views", "views")
//port, listen for request
app.listen(3000);

//middleware for static files
app.use(express.static("public"))
//morgan middleware
app.use(morgan("dev"))

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
app.use((req,res,next)=>{
  console.log("in the next middleware")
  next()
})

app.get("/", (req, res) => {
  // res.send("Hello, World!")
  // res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "heyyyy",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus, esse vero, unde quisquam deserunt consequatur hic molestiae fugit reiciendis porro minima et quas iusto sint a ut, nisi recusandae.",
    },
    {
      title: "heyyyy",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus, esse vero, unde quisquam deserunt consequatur hic molestiae fugit reiciendis porro minima et quas iusto sint a ut, nisi recusandae.",
    },
    {
      title: "heyyyy",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus, esse vero, unde quisquam deserunt consequatur hic molestiae fugit reiciendis porro minima et quas iusto sint a ut, nisi recusandae.",
    },
    {
      title: "heyyyy",
      snippet:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus, esse vero, unde quisquam deserunt consequatur hic molestiae fugit reiciendis porro minima et quas iusto sint a ut, nisi recusandae.",
    },
  ];
  //render a view
  res.render("index", { title: "Home", blogs: blogs });
});

//routing and html
app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create-Blog" });
});

//404 page - this should go to the very bottom of the logic, because for every request made, it will check for the route, if there is no match it fires the 404 error page
//this is an example of a middleware
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

//middleware is a code that runs on a server, it is responsible for send getting a request and sending a response
//e.g the app.use(func)
//use cases for middleware
//- it can be used to log details of every request
//-it can be used for authentication checks for protected routes
//- to parse JSON data from requests
// to return 404 pages
