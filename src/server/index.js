import express from 'express';
import path from 'path';


const app = express();

const TEMPLATE_DIR = path.join(__dirname, '../public');

app.get('/:any?', (req, res) => {
    res.setHeader('content-type', 'html');
    res.sendFile('index.html', { root: TEMPLATE_DIR });
});

app.get('/client/:fileName', (req, res) => {
    res.setHeader('content-type', 'application/javascript');
    res.sendFile(path.join(__dirname, '../client', req.params.fileName)); 
});

app.listen(3030, () => {
    console.log('Server run on port 3030')
});
