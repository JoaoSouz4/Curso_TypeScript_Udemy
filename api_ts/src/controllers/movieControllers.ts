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

         return res.status(200).json({resp: movie})

     } catch(e: any){
          console.log("Erro em fazer o registro: " + e);
     }
}

export async function getAllMovies(req: Request, res: Response) {
     try {
          const movies = await movieModel.find({})
          return res.status(200).json({movies})
     } catch (error) {
          console.log(error)
     }
}

export async function removeMovie(req: Request, res: Response){
     try {
         const id = req.params.id;
         const movie = await movieModel.findById(id);

         if(!movie) {
          return res.status(404).json({error: "Filme não encontrado"});
         }

         await movie.deleteOne();

         return res.status(200).json({message: "registro deletado"})
         
     } catch (error) {
          console.log(error);
     }
}

export async function updateMovie(req: Request, res: Response){
     try {
          const id = req.params.id;
          const data = req.body;
          const movie = await movieModel.findById(id);
 
          if(!movie) {
           return res.status(404).json({error: "Filme não encontrado"});
          }

          await movieModel.updateOne({_id: id}, data);
          return res.status(200).json(data);

     } catch (error) {
          console.log(console.error);
          
     }
}
