import { Router } from "express";
import jwt from 'jsonwebtoken';

// Declarando
const auth = Router();

const secret_key = 'your_secret_key';

// Rotas
auth.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin'){
        const token = jwt.sign({ username}, secret_key, {expiresIn: '1h'});
        return res.status(200).json({ token });
    }

    res.status(401).json({ message: "Credenciais inválidas" });

});

auth.post('/register', (req, res) => {});

export default auth;