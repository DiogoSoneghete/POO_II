import { PrismaClient } from '@prisma/client'
import {Usuario} from './Usuario';
const prisma = new PrismaClient();

(async () => {
    
    var nome = prompt("Digite seu nome: ");
    let matricula: number = prompt("Digite sua matrícula: ");
    let email = prompt("Digite seu email: ");
    let tipo = prompt("Você é aluno (s|n): ");
    let usuario;

    if (tipo === "s") {
        let usuario = new Usuario(nome, matricula, email, false);
    }
    else {
        let usuario = new Usuario(nome, matricula, email, true);
    }




    usuario.exibirInformacoes();

})();