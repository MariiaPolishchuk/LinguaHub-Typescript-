const express = require('express');
const mongoose = require('mongoose');
const lessonRoutes = require('./routes/lessonRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
app.use(express.json());
app.use('/api', lessonRoutes);
app.use('/api', assignmentRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'your_mongo_db_connection_string';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.error('MongoDB connection error:', error));
