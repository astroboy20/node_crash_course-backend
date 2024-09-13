//reading file
const fs = require("fs");
fs.readFile("./text.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString()); // this a package of data to get the true data instaed of buffer, we add the .toString( method)
});

//writing file'

fs.writeFile("./text.txt", "hello world", () => {
  console.log("file was written");
}); // if a mistake of directory is made, it will create the directory

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("folder deleted");
  });
}

//deleting files
if (fs.existsSync("./text.txt")){
    fs.unlink("./text.txt", (error) => {
        if (error) {
          console.log(error);
        }
        console.log("file deleted");
      })
}
