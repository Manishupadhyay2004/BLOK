# Blok

Blok is a simple blogging platform built with Node.js, Express, and EJS. It allows users to create, view, and delete blog posts using a JSON file as a database.

## Features

- **Homepage:** View all blog posts.
- **New Blog:** Create a new Blok post with a title, description, image URL, author, and creation date.
- **Blog Details:** Click on a Blok to see its full details.
- **Delete Blog:** Remove unwanted Blok posts.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd BeeLog
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

4. **Open your browser:**  
   Navigate to [http://localhost:2000](http://localhost:2000) to see the application.

## Project Structure

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

## Usage

- **Homepage:** Displays a list of Bloks loaded from `data.json`.
- **New Blog:** Accessed via `/new`, this form allows you to add a new Blok.
- **View Blog:** Click on a blog card on the homepage to view its details at `/show/:id`.
- **Delete Blog:** Click the delete button on a blog card to remove it from `data.json`.

## License

This project is licensed under the MIT License.

## Author

[Your Name Here]
