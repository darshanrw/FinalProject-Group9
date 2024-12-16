const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.EXPOSE_PORT || 3000;

app.get('/', (req, res) => {
    fs.readFile('config.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading config file');
            return;
        }
        const config = JSON.parse(data);
        res.send(config.message);
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});