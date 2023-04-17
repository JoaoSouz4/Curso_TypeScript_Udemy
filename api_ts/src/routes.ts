import { Router } from "express";
import { Request, Response } from "express";
import { createMovie, findMoviesById } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { moveiCreateValidation } from "./middleware/movieValidation";


const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "ok"});
});

routes.get("/movie/:id", findMoviesById);

routes.post("/movie", moveiCreateValidation(), validate, createMovie)

export default routes;