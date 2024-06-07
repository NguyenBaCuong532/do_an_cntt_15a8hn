const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const phongmayRoutes = require('./routes/phongmay');
const lichsuRoutes = require('./routes/lichsutk');
const thietbiRoutes = require('./routes/thietbi');
const cauhinhRoutes = require('./routes/cauhinh');
const qldkymayRoutes = require('./routes/qldkymay');



app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/phongmay',phongmayRoutes)
app.use('/lichsutk', lichsuRoutes);
app.use('/thietbi', thietbiRoutes);
app.use('/cauhinh', cauhinhRoutes);
app.use('/qldkymay', qldkymayRoutes);







app.listen(4000, () => {
  console.log('Listening....');
});
