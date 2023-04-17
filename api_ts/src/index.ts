require("dotenv").config();
import express from 'express';
import config from 'config';
import routes from './routes'
import startDB from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';


const app = express();

//midllewares que serão executados a cada nova requisição:
app.use(morganMiddleware);
app.use(express.json());
app.use(routes);

const port = config.get<number>("port");

app.listen(port, async() => {
    await startDB();
    Logger.info("Servidor rodando na porta: " + port);
})