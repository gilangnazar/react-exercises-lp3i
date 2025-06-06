const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const authRouter = require('./routes/auth');
const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', authRouter);

app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`);
});