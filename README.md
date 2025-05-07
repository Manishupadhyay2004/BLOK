📝 Blok
Blok is a simple and clean blogging platform built with Node.js, Express, and EJS. It lets you create, view, and delete blog posts using a JSON file as your lightweight database.

🚀 Features
🏠 Homepage – View all blog posts at a glance.

🆕 New Blog – Create a new Blok with a title, description, image URL, author, and date.

🔍 Blog Details – Click a post to view its full details.

❌ Delete Blog – Remove unwanted Blok posts easily.

⚙️ Installation
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
cd BeeLog
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run devStart
Or start normally:

bash
Copy
Edit
npm start
Open in browser:
Navigate to http://localhost:2000 🌐

📁 Project Structure
pgsql
Copy
Edit
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
🧑‍💻 Usage
🏠 Homepage: Displays all Bloks from data.json.

📝 New Blog: Visit /new to add a new Blok.

👁️ View Blog: Click a card to view blog details at /show/:id.

🗑️ Delete Blog: Use the delete button on a card to remove a Blok.

📜 License
Licensed under the MIT License.

👨‍🎨 Author
Made with ❤️ by Manish Upadhyay
