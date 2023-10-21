import { PrismaClient } from '@prisma/client';
import * as readline from 'readline';
import { Usuario } from './src/Usuario';

const prisma = new PrismaClient();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(prompt, resolve);
    });
}

(async () => {
    let nome: string = await question('\nDigite seu nome: ');
    let matricula: number = parseInt(await question('Digite sua matricula: '));
    let email: string = await question('Digite seu email: ');
    let tipo: boolean = (await question('Você é aluno? (s|n): ')).toLowerCase() === 's';

    rl.close();

    const usuario = new Usuario(nome, matricula, email, tipo);
    usuario.exibirInformacoes();

    try {
        await prisma.usuario.create({
            data: {
                nome: usuario.getNome(),
                matricula: usuario.getMatricula(),
                email: usuario.getEmail(),
            }
        });
        console.log('Usuário cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
    } finally {
        await prisma.$disconnect();
    }
})();