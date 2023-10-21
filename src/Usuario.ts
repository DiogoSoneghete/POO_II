export class Usuario {

    private nome: string;
    private matricula: number;
    private email: string;
    private tipoUsuario: boolean; // false: aluno, true: professor

    usuario(){}

    constructor(nome: string, matricula: number, email: string, tipoUsuario: boolean) {
        this.nome = nome;
        this.matricula = matricula;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
    }

   
    public getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getMatricula(): number {
        return this.matricula;
    }

    setMatricula(matricula: number) {
        this.matricula = matricula;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getTipoUsuario(): boolean {
        return this.tipoUsuario;
    }

    setTipoUsuario(tipoUsuario: boolean) {
        this.tipoUsuario = tipoUsuario;
    }

    exibirInformacoes() {
        console.log(`\nNome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Email: ${this.email}`);
        console.log(`Tipo de Usuário: ${this.tipoUsuario}`);
    }
}


