// Required Modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Endpoint to get blog posts
app.get('/api/posts', (req, res) => {
    const filePath = path.join(__dirname, 'posts.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading posts file' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint to add a new blog post
app.post('/api/posts', (req, res) => {
    const newPost = req.body;

    // Validate input
    if (!newPost.title || !newPost.content || !newPost.imageUrl) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const filePath = path.join(__dirname, 'posts.json');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading posts file' });
        }
        
        const posts = JSON.parse(data);
        const newId = posts.length ? Math.max(posts.map(post => post.id)) + 1 : 1; // Generate a new ID
        const postWithId = { id: newId, ...newPost }; // Add ID to the new post
        
        posts.push(postWithId); // Add the new post to the existing posts

        // Save the updated posts back to the file
        fs.writeFile(filePath, JSON.stringify(posts, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error saving posts file' });
            }
            res.status(201).json(postWithId); // Respond with the new post
        });
    });
});

// Endpoint to serve the blog post form
app.get('/add-blog', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Add Blog Post</title>
            </head>
            <body>
                <h1>Add New Blog Post</h1>
                <form action="/api/posts" method="POST">
                    <input type="text" name="title" placeholder="Blog Title" required />
                    <textarea name="content" placeholder="Blog Content" required></textarea>
                    <input type="url" name="imageUrl" placeholder="Image URL" required />
                    <button type="submit">Add Blog Post</button>
                </form>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
