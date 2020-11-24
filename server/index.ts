import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import categories from './categories.json';
import posts from './posts.json';

const PORT: number = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (_, res) => {
    return res.send(`<p>server running </p>`)

});

app.get('/posts', (_, res) => {
    return res.json(posts);
});


app.get("/posts/:id", (req, res) => {
    const wanted: string = String(req.params.id);
    const post = posts.find(({ id }) => String(id) === wanted);
    return res.json(post);
});

app.get('/categories', (_, res) => {
    return res.json(categories);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




