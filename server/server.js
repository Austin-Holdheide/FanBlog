const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 6942;

// Use CORS middleware
app.use(cors());

app.get('/:category', (req, res) => {
    // Log the IP address and request type for GET requests
    console.log(`Received GET request from IP: ${req.ip}`);

    // Read data from the JSON file
    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Get the requested category from the route parameters
        const category = req.params.category;

        // Get the requested post ID from the query parameters
        const postId = req.query.id;

        // Find the post with the matching ID in the requested category
        const requestedPost = jsonData[category].find(post => post.id == postId);

        // Send the requested post data as JSON
        if (requestedPost) {
            res.json(requestedPost);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
