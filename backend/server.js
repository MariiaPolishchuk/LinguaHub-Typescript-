const express = require('express');
const mongoose = require('mongoose');
const lessonRoutes = require('./routes/lessonRoutes');
const assignmentRoutes = require('./routes/assignmentRoutes');

const app = express();
app.use(express.json());
app.use('/api', lessonRoutes);
app.use('/api', assignmentRoutes);

const PORT = process.env.PORT || 3000; // или другой доступный порт


const MONGO_URI = 'mongodb://localhost:27017/your_database_name';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.error('MongoDB connection error:', error));
