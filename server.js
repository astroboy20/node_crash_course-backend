const http = require("http");
const fs = require("fs");
const _ = require("lodash")

const server = http.createServer((req, res) => {
//   console.log(req.method);
//lodash
const num = _.random(0,20)
// const greet = _once(()=>{
//     console.log("hello")
// })

// greet()
// greet()
console.log(num)
  //response header gives more information about the response we are expecting
  //req- contaisn all the information about the reuest
  //res- it is used to send the response to the user
  res.setHeader("Content-Type", "text/html");
  //we are writing what we want to the browser
  res.write("");

  //setting up the routes
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      //setting status code
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      //setting status code
      res.statusCode = 200;
      break;
    // case "/about-me":
    //   res.statusCode = 301;
    //   res.setHeader("Location", "/about");
    //   res.end();
    //   return
    default:
      path += "404.html";
      //setting status code
      res.statusCode = 404;
      break;
  }
  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);

      res.end();
    }
  });
  //we are ending the response
  // res.end()
});

server.listen(8080, "localhost", () => {
  console.log(`listening for request on port 8080`);
});

//port number are like 'doors' into our computer through which internet connection can be made for diffrent website
//localhost is a domain on the web that points to our own computer
//so we need a localhost and port number to run a server for this server we have localhost:8080
