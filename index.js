import express from 'express';
import connectDB from './config/db';

const app = express();

// database connection
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`));