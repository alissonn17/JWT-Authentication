import express from 'express';
import { Router } from 'express';
import auth from './routes/auth.routes.js';

const app = express();
const router = Router();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas
app.use('/auth', auth);

// Rodando o servidor
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});


export default app;