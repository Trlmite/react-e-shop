import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import authRouter from './routes/auth-router.js';
import itemRouter from './routes/item-router.js'
import filterRouter from './routes/filter-router.js'
import cors from 'cors';
import './database/index.js';


// Užkrauna duomenis iš .env failo
config();
// Sukuria serverio objektą, kuris galės atsakyti į užklausas
const server = express();
// iš vykstančios programos aplinkos pasiemame kintamį, kuris buvo aprašytas .env faile
const { SERVER_PORT } = process.env;

// Middlewares
// Darant užklausas į serverį atspausdina minimalią informacija paleisto serverio konsolėje
server.use(morgan('tiny'));
// Leidžia vykdyti užklausas iš visų puslapių
server.use(cors());
// Gavus JSON tipo duomenis, įdeda į request handlerio už-klausos parametrą -> req.body
server.use(express.json());

// Response handlers
// Visas užklasas kurios prasideda  adresu '/api/auth' serveris nukreips į authRouter
server.use('/auth', authRouter);
server.use('/items', itemRouter)
server.use('/filters', filterRouter)


// Serveriui perduodamos užklausos, kurios bus gautos į šio kompiuterio 5000'inį port'ą
server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant http://localhost:${SERVER_PORT}/`);
});
