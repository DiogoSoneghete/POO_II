import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class GroupController {

    constructor(){}

    async listGroups(req: Request, res: Response) {
        const grupo = await prisma.grupo.findMany();
        res.json({
            grupo,
        });
    }
}

export default new GroupController();