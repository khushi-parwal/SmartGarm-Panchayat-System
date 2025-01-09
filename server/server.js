// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
// const session = require('express-session');

const app = express();

dotenv.config();

const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Middleware
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

  
//ROUTES
const userRoutes=require('./routes/userRoutes');
const adminRoutes=require('./routes/adminRoutes');
const applicationRoutes=require('./routes/applicationRoutes');
const complaintRoutes=require('./routes/complaintRoutes');
const wardRoutes=require('./routes/wardRoutes');
const notificationRoutes=require('./routes/notificationRoutes');
const authRoutes = require('./routes/authRoutes');
// const mycomplaintRoutes=require('./routes/mycomplaintRoutes');

//use the routers
app.use('/',userRoutes);
app.use('/',adminRoutes);
app.use('/', applicationRoutes);
app.use('/', complaintRoutes);
app.use('/', wardRoutes);
app.use('/', notificationRoutes);
app.use('/', authRoutes);
// app.use('/', mycomplaintRoutes)


// connectDB();
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
