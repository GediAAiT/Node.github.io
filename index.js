const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/name', (req, res) => {
    res.send('Gedion Negash');
});

app.get('/hobby', (req, res) => {
    res.json({ hobby: 'programming,reading fiction and Biography books,music, watching movie and soccer Games' });
});

app.get('/dream', (req, res) => {
    res.send('My dream is to become one of the Greatest developer in Ethiopia and to create my own tech company');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
