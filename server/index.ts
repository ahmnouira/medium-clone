import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import categories from './categories.json'
import comments from './comments.json'
import posts from './posts.json'

const PORT: number = 4000
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (_, res) => {
  return res.send(`<p>server running </p>`)
})

app.get('/posts', (_, res) => {
  return res.json(posts)
})

app.get('/posts/:id', (req, res) => {
  const wanted: string = String(req.params.id)
  const post = posts.find(({ id }, index: number) => String(id) === wanted)
  return res.json(post)
})

app.get('/categories', (_, res) => {
  return res.json(categories)
})

app.get('/categories/:id', (req, res) => {
  const { id } = req.params
  const found = posts.filter(({ category }) => category.toLocaleLowerCase() === id)
  // const categoryPosts = [...found, ...found, ...found, ...found, ...found, ...found];
  let categoryPosts = []
  let rows = 200
  for (let i = 0; i < rows; i++) {
    categoryPosts.push(...found)
  }
  console.log('length: ', categoryPosts.length)
  return res.json(categoryPosts)
})

app.get('/comments/:postId', (req, res) => {
  const id: number = Number(req.params.postId)
  let json: Comment[] = JSON.parse(JSON.stringify(comments))
  // console.log('comments:', json);
  const found = comments.filter(({ postId }) => postId === id)
  return res.json(found)
})

app.post('/posts/:postId/comments', (req, res) => {
  const postId: number = Number(req.params.postId)
  comments.push({
    id: comments.length + 1,
    author: req.body.name,
    content: req.body.comment,
    postId,
    time: 'Less than a minute ago',
  })
  // return the list of comments for live data (without reload the client page)
  const found = comments.filter((comment) => comment.postId === postId)
  return res.json(found)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
