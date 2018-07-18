const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
var mime = require('mime-types')

const app = express();
const port = process.env.PORT || 3000;

app.use(serveStatic(__dirname + '/dist', {
    maxAge: '1y',
    setHeaders: function (res, path) {
        if (mime.lookup(path) === 'text/html') {
            res.setHeader('Cache-Control', 'public, max-age=0')
        }
    }
}))

// app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.get('/index2', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index2.html'));
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
