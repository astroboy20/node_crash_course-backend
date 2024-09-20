const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

//routes
router.get("/", (req, res) => {
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
  // res.render("index", { title: "Home", blogs: blogs });
  res.redirect("/blogs");
});

//routing and html
router.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//updated code with the use of contoller
router.get("/blogs", blogController.blog_index);

//post request
router.post("/blogs",blogController.blog_create_post);

router.get("/blogs/create", blogController.blog_create_get);

//routes parameters are the variable parts of the routs that may chnage value
// e.g. localhost:3000/blogs/:id
//to denote a parameter we use colon before it e.g. :id, we will be looking for the id
router.get("/blogs/:id",blogController.blog_details);

//delete
router.delete("/blogs/:id", blogController.blog_delete);

//404 page - this should go to the very bottom of the logic, because for every request made, it will check for the route, if there is no match it fires the 404 error page
//this is an example of a middleware
router.use((req, res) => {
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

module.exports = router;
