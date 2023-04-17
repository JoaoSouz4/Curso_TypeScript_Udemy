import { Request, Response } from 'express'; 
import { movieModel } from '../models/move';
import Logger from '../../config/logger';

export async function createMovie(req: Request, res: Response){
   try{
        const data = req.body;
        const movie = await movieModel.create(data);

        return res.status(201).json(movie);
   } catch(e: any){
        Logger.error("Erro em fazer o registro: " + e);
   }
}

export async function findMoviesById(req: Request, res: Response) {

     try{
         const id = req.params.id;
         const movie = await movieModel.findById(id);

         if(!movie) {
          return res.status(404).json({error: "Filme não encontrado"})
         }

     } catch(e: any){
          Logger.error("Erro em fazer o registro: " + e);
     }
}
