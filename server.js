const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
.then(() => console.log("MongoDB Connected"));

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    comment: String
});

const Blog = mongoose.model("Blog", BlogSchema);

app.post("/addBlog", async(req,res)=>{
    const blog = new Blog(req.body);
    await blog.save();
    res.send("Blog Added");
});

app.get("/blogs", async(req,res)=>{
    const blogs = await Blog.find();
    res.json(blogs);
});

app.listen(5000, ()=>{
    console.log("Server Running");
});