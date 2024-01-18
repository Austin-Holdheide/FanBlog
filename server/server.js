// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 6942;

// Use CORS middleware
app.use(cors());

app.get('/posts', (req, res) => {
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

        // Send the posts data as JSON
        res.json({ posts: jsonData.posts });
    });
});

app.get('/blogposts', (req, res) => {
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

        // Send the blogposts data as JSON
        res.json({ blogposts: jsonData.blogposts });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
