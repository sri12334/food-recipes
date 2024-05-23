import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import recipeRoutes from './routes/recipe.js';

dotenv.config();
const PORT = process.env.PORT || 5009;

const app = express();

// Enable CORS
app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(recipeRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

// 404 Not Found handling
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});

// Connect to database
const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
        console.log('Connected to the database successfully');
        app.listen(PORT, () => {
            console.log(`Server is up and running on port: ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};
connectToDB();
