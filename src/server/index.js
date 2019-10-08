import express from 'express';
import path from 'path';


const app = express();

const TEMPLATE_DIR = path.join(__dirname, '../public');


const getHtmlResponse = (req, res) => {
    res.setHeader('content-type', 'html');
    res.sendFile('index.html', { root: TEMPLATE_DIR });
};

app.get('/',  getHtmlResponse);

app.get('*/client/:fileName', (req, res) => {
    res.setHeader('content-type', 'application/javascript');
    res.sendFile(path.join(__dirname, '../client', req.params.fileName)); 
});

app.get('/file/:path([^/]*)', getHtmlResponse);
app.get('/tree/:path([^/]*)', getHtmlResponse);


app.listen(3030, () => {
    console.log('Server run on port 3030')
});
