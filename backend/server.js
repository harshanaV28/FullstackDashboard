// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { users, posts } = require('./data');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, username: user.username });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(5000, () => console.log('Backend running on port 5000'));
