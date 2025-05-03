
import express from 'express';
import aiRouter from './routes/ai.routes.js';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Ai Code Reviewer')
})

app.use('/ai', aiRouter)
// http://localhost:3000/ai/get-response

export default app;