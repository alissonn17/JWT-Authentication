import { Router } from "express";
import jwt from 'jsonwebtoken';
import ms from 'ms';
import dotenv from 'dotenv-safe';

dotenv.config();

// Declarando
const auth = Router();

const blacklist = {};

// Rotas
auth.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin'){
        const token = jwt.sign({ username}, process.env.JWT_key || 'your_secret_key', {expiresIn: ms(process.env.JWT_Expires || '1h')});
        return res.status(200).json({ token });
    }

    res.status(401).json({ message: "Credenciais inválidas" });
});

auth.post('/logout', verifyjwt, (req, res) => {
    const token = req.headers['authorization'].replace('Bearer ', '');
    blacklist[token] = true;
    setTimeout(() =>
        delete blacklist[token], 
        ms(process.env.JWT_Expires || '1h')
    );

    res.json({ token: null})
});

auth.get("/", (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})
 
auth.get("/clientes", verifyjwt,(req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
}) 

export function verifyjwt(req, res, next){
    const token = req.headers['authorization'].replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: "Token não fornecido"});

    if (blacklist[token]) return res.status(403).json({ message: "Token inválido"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_key || 'your_secret_key');

        if (!decoded) return res.status(401).json({ message: "Token inválido"});

        res.locals.token = decoded;
        return next();
    } catch (err) {
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token expirado. Faça login novamente." });
    }
    return res.status(403).json({ error: err.message });
}


}

export default auth;