const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const db = require('./db');
const emailRoutes = require('./routes/emailRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3306;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use('/api/email', emailRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'Frontend', 'public', 'uploads')));

app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

db.connect();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
