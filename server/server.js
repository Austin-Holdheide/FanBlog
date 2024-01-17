// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
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

        // Send the data as JSON
        res.json(jsonData);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
