import { Request, Response, Router } from "express";
import AvaliController from "../controllers/AvaliController";

const AvaliRouter = Router();

AvaliRouter.get("/Avalis",AvaliController.listAvali);

AvaliRouter.post('/Avali', function(req: Request, res: Response){
    res.send("Requisição POST de usuário");
});

AvaliRouter.put('/Avali', function(req: Request, res: Response){
    res.send("Requisição PUT de usuário");
});

AvaliRouter.delete('/Avali', function(req: Request, res: Response){
    res.send("Requisição DELETE de usuário");
});

export default AvaliRouter;