const express = require('express');
const app = express();
const port = 3001;
const connection = require('./db'); // Ensure you have your db.js set up properly

app.use(express.json());

// Define your API routes here
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
