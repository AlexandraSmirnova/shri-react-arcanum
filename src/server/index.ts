import * as express from 'express';
import * as path from 'path';

const app = express();

const TEMPLATE_DIR = path.join(__dirname, '../public');

const getHtmlResponse = (req: express.Request, res: express.Response) => {
    res.setHeader('content-type', 'html');
    res.sendFile('index.html', { root: TEMPLATE_DIR });
};

app.get('/', getHtmlResponse);

app.get('*/client/:fileName', (req: express.Request, res: express.Response) => {
    res.setHeader('content-type', 'application/javascript');
    res.sendFile(path.join(__dirname, '../client', req.params.fileName));
});

app.get('/file/:path([^/]*)', getHtmlResponse);
app.get('/tree/:path([^/]*)', getHtmlResponse);

app.listen(3030, () => {
    console.log('Server run on port 3030');
});
