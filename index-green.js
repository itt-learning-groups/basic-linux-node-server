const express = require('express')
const app = express()

app.get('/', (req, res) => {

    res.send(`<!DOCTYPE html><html><head><style>body{background-color:lightgreen;font-family:Arial,sans-serif;} .center{margin:auto;width:60%;padding:100px;text-align:center;}</style></head><body><div class=\"center\"><h1>Green</h1></div></body></html>`);

    let now = new Date().getTime();
    let result = 0;
    while(true) {
        result += Math.random() * Math.random();
        if (new Date().getTime() > now + 1000)
        break;
    }
})

app.listen(8080, () => console.log('Green server running on port 8080'));
