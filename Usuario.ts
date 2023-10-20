export class Usuario {
    nome: string;
    matricula: number;
    email: string;
    tipoUsuario: boolean;

    constructor(nome: string, matricula: number, email: string, tipoUsuario: boolean) {
        this.nome = nome;
        this.matricula = matricula;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Email: ${this.email}`);
        console.log(`Tipo de Usuário: ${this.tipoUsuario}`);
    }
}


