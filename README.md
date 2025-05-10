# Blok 📝

Blok is a simple blogging platform built with Node.js, Express, and EJS. It allows you to create, view, and delete blog posts while using a JSON file as the database. 💻📚

## Features 🚀

- **Homepage:** View all blog posts 📰
- **New Blok:** Create a new post with title, description, image URL, author, and creation date 📝
- **Blog Details:** Click on a post to see full details 🔍
- **Delete Blok:** Remove unwanted posts 🗑️

## Installation 💾

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Blok
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run devStart
   ```
   Or to run normally:
   ```bash
   npm start
   ```


## Project Structure 🗂

```
Blok
├── app.js
├── data.json
├── package.json
├── .gitignore
├── public
│   └── stylesheets
│       └── style.css
└── views
    ├── home.ejs
    ├── new.ejs
    └── show.ejs
```

## Usage 🎯

- **Homepage:** Displays a list of posts loaded from `data.json` 📰
- **New Blok:** Accessible via `/new`, where you can add a new post 📝
- **View Blok:** Click on a blog card to see details at `/show/:id` 🔍
- **Delete Blok:** Use the delete button to remove a post 🗑️

## License 🔓

This project is licensed under the MIT License.

## Author 👤

[Manish Upadhyay]
