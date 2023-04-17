import config from 'config'
import mongoose from 'mongoose';
import Logger from './logger';

const db = config.get<string>("url");

async function startDB(){
    try{
        await mongoose.connect(db);
        Logger.info("Conectado com o mongoDB");
    } catch(e) {
        Logger.error("Erro :" + e);
    }
}

export default startDB;