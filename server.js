const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const mongoose = require('mongoose');
require('dotenv').config();  

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(error => {
    console.error('Connection to MongoDB failed!', error);
    process.exit(1);  
  });


const authRoutes = require('./src/routes/authRoutes');


const taskRoutes = require('./src/routes/taskRoutes');

const fileRoutes = require('./src/routes/fileRoutes');


app.use(cors());  // Allows all cross-origin requests


app.use(express.json()); 


app.use('/api/user', authRoutes);

app.use('/api/tasks', taskRoutes);

app.use('/api/files', fileRoutes);

app.use('/uploads', express.static('uploads'));

console.log(swaggerSpec);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  //api-documentation

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));