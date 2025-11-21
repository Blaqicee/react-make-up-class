const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postsRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRoute);
app.use('/api/categories', categoriesRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
