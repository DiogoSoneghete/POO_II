import { Request, Response, Router } from "express";
import groupController from "../controllers/GroupController";

const GroupRouter = Router();

GroupRouter.get("/groups",groupController.listGroups);

GroupRouter.post('/group', function(req: Request, res: Response){
    res.send("Requisição POST de grupo");
});

GroupRouter.put('/group', function(req: Request, res: Response){
    res.send("Requisição PUT de grupo");
});

GroupRouter.delete('/group', function(req: Request, res: Response){
    res.send("Requisição DELETE de grupo");
});

export default GroupRouter;