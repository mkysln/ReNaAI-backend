import express from 'express';
import dotenv from 'dotenv';
import productivityRouter from './routes/productivity';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/weekly-productivity', productivityRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});