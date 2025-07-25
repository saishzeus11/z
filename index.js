// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON in request body
app.use(express.json());

app.use(express.urlencoded({extended:true}));

// In-memory storage (simulated database)
 

// GET endpoint
app.get('/messages', (req, res) => {
    res.json("hello");
});

// POST endpoint
app.post('/postMessage', (req, res) => {
    const myjson = req.body;
        
    res.status(201).json(myjson);
});

// POST endpoint
app.post('/postForm', (req, res) => {
    const myjson = req.body;
    
    res.status(201).json(myjson);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
