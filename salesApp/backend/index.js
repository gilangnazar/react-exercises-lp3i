const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const suppliersRoute = require('./routes/suppliersRoute');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use('/api', suppliersRoute);
app.use('/api', usersRoute);
app.use('/api', productsRoute);

app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
