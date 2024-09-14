const mongoose = require("mongoose");
// this is the structure of out blog model
const Schema = mongoose.Schema;

//this object describe what we want to store for our document type
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//models, it takes two arguements
//-the name of the model in singular form, which it transforem to plural itself, it will use thisnmae to find the model in the database
//- the schema that is already created
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
