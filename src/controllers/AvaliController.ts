import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
class AvaliController {

    constructor(){}

    async listAvali(req: Request, res: Response) {
        const avali = await prisma.avaliacao.findMany();
        res.json({
            avali,
        });
    }
}

export default new AvaliController();