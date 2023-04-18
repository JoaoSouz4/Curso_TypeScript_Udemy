import { Router } from "express";
import { Request, Response } from "express";
import { createMovie, findMoviesById, removeMovie, updateMovie } from "./controllers/movieControllers";
import { validate } from "./middleware/handleValidation";
import { moveiCreateValidation } from "./middleware/movieValidation";
import { getAllMovies } from "./controllers/movieControllers";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    res.status(200).json({message: "ok"});
});

routes.get("/movie/:id", findMoviesById);

routes.get("/find", getAllMovies);

routes.post("/movie", moveiCreateValidation(), validate, createMovie)

routes.delete("/movie/:id", removeMovie);

routes.patch("/movie/:id", moveiCreateValidation(), validate, updateMovie);

export default routes;