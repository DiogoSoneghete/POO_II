import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
    const usuarios = await prisma.usuario.count();
    console.log(usuarios);
})();