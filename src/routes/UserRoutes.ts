import { Request, Response, Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

UserRouter.get("/users",UserController.listUsers);

UserRouter.post('/user', function(req: Request, res: Response){
    res.send("Requisição POST de usuário");
});

UserRouter.put('/user', function(req: Request, res: Response){
    res.send("Requisição PUT de usuário");
});

UserRouter.delete('/user', function(req: Request, res: Response){
    res.send("Requisição DELETE de usuário");
});

export default UserRouter;