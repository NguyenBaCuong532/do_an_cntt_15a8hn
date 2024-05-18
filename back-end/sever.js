const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(4000, () => {
  console.log('Listening....');
});
