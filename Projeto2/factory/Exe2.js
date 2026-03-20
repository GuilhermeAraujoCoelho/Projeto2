// Classe Pessoa
class Pessoa {
    constructor(nome, cargo, matricula, horaEntrada, horaSaida) {
        this.nome = nome;
        this.cargo = cargo;
        this.matricula = matricula;
        this.horaEntrada = horaEntrada;
        this.horaSaida = horaSaida;
    }

    mostrar() {
        console.log(this);
    }
}

// Builder
class PessoaBuilder {
    constructor() {
        this.nome = "";
        this.cargo = "";
        this.matricula = "";
        this.horaEntrada = "";
        this.horaSaida = "";
    }

    setNome(nome) {
        this.nome = nome;
        return this;
    }

    setCargo(cargo) {
        this.cargo = cargo;
        return this;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
        return this;
    }

    setHoraEntrada(hora) {
        this.horaEntrada = hora;
        return this;
    }

    setHoraSaida(hora) {
        this.horaSaida = hora;
        return this;
    }

    build() {
        return new Pessoa(
            this.nome,
            this.cargo,
            this.matricula,
            this.horaEntrada,
            this.horaSaida
        );
    }
}

// Testando
const pessoa1 = new PessoaBuilder()
    .setNome("João")
    .setCargo("Aluno")
    .setMatricula("12345")
    .setHoraEntrada("07:00")
    .setHoraSaida("12:00")
    .build();

const pessoa2 = new PessoaBuilder()
    .setNome("Maria")
    .setCargo("Professor")
    .setMatricula("98765")
    .setHoraEntrada("08:00")
    .setHoraSaida("18:00")
    .build();

pessoa1.mostrar();
pessoa2.mostrar();