import express from 'express';
import auth from './routes/auth.routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.Port || 3000;

// Middleware
app.use(express.json());

// Rotas
app.use('/auth', auth);

// Rodando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});


export default app;