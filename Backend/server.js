import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cardRoutes from './src/components/routes/cardRoutes.js';
import errorHandler from './src/components/middlewares/errorHnadler.js';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())
// Ping endpoint
app.get('/ping', (req, res) => {
    res.send('Server is running');
});

// Card routes
app.use('/cards', cardRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
