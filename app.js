const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

if (!fs.existsSync("data.json")) {
  fs.writeFileSync("data.json", "[]", "utf-8");
}

app.get("/", (req, res) => {
  const blogsData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  res.render("home", { blogss: blogsData });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  const { title, description, image, author, created_on } = req.body;
  const blogss = JSON.parse(fs.readFileSync("data.json", "utf-8"));

  const now = new Date(created_on);
  const formatted = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", // or 'long' for full month
    year: "numeric",
  });

  const newblogs = {
    id: Date.now(),
    title,
    description,
    image,
    author,
    created_on: formatted,
  };

  blogss.push(newblogs);
  fs.writeFileSync("data.json", JSON.stringify(blogss, null, 2));
  res.redirect("/");
  // console.log(body)
});

app.get("/show/:id", (req, res) => {
  const id = Number(req.params.id); // Convert to number if your blogs ids are numbers
  const blogss = JSON.parse(fs.readFileSync("data.json", "utf-8"));

  const blogs = blogss.find((b) => b.id === id);

  if (!blogs) {
    return res.status(404).send("blogs not found");
  }

  res.render("show", { blogs });
});

app.post("/delete/:id", (req, res) => {
  const id = Number(req.params.id);
  let blogss = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  blogss = blogss.filter((blogs) => blogs.id !== id);
  fs.writeFileSync("data.json", JSON.stringify(blogss, null, 2));
  res.redirect("/");
});
const port = 2000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
