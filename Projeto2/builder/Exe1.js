// Classe base
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

// Tipos específicos
class Aluno extends Pessoa {
    apresentar() {
        console.log(`Sou o aluno ${this.nome}`);
    }
}

class Professor extends Pessoa {
    apresentar() {
        console.log(`Sou o professor ${this.nome}`);
    }
}

class Administrativo extends Pessoa {
    apresentar() {
        console.log(`Sou do administrativo: ${this.nome}`);
    }
}

class Publico extends Pessoa {
    apresentar() {
        console.log(`Sou do público: ${this.nome}`);
    }
}

// Factory Method
class PessoaFactory {
    static criarPessoa(tipo, nome) {
        switch (tipo.toLowerCase()) {
            case "aluno":
                return new Aluno(nome);
            case "professor":
                return new Professor(nome);
            case "administrativo":
                return new Administrativo(nome);
            case "publico":
                return new Publico(nome);
            default:
                throw new Error("Tipo de pessoa inválido");
        }
    }
}

// Testando
const p1 = PessoaFactory.criarPessoa("aluno", "João");
const p2 = PessoaFactory.criarPessoa("professor", "Maria");
const p3 = PessoaFactory.criarPessoa("administrativo", "Carlos");
const p4 = PessoaFactory.criarPessoa("publico", "Ana");

p1.apresentar();
p2.apresentar();
p3.apresentar();
p4.apresentar();