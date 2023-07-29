import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './routes/routes.mjs';

const app = express();

app.use(bodyParser.json());

app.use('/api/items', router);

import Uri from './config/keys.mjs';
mongoose.connect (Uri)
    .then (() => console.log ('connected'));

const PORT = process.env.PORT || 7000;
app.listen (PORT, () => console.log (`Server running on port ${PORT}`));