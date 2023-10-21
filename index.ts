import { PrismaClient } from '@prisma/client'
import {Usuario} from './src/Usuario';
import * as readline from 'readline';

const prisma = new PrismaClient();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

(async () => {
    
    var nome: string;
    var matricula: number;
    var email: string;
    var tipo: boolean;


    rl.question('Digite seu nome: ', (input) => {
        nome = input as string;
        rl.close();
      });
      rl.question('Digite sua matricula: ', (input) => {
        matricula = input as unknown as number;
        rl.close();
    });
    rl.question('Digite seu email: ', (input) => {
        email = input as string;
        rl.close();
    });
    rl.question('Você é aluno? (s|n): ', (input) => {
        if (input === 's') {
            tipo = true;
        }
        else {
            tipo = false;
        }
        rl.close();
    });

    //let nome1 = usuario.setNome(nome); 


    // let usuario = new Usuario(nome, matricula, email, tipo);
    let usuario = new Usuario("Diogo Soneghete", 12345, "diogosoneghetealmeida@gmail.com", false);
    usuario.exibirInformacoes();

})();