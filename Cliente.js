// começar uma classe com letra maiuscula
// molde
//classes em JavaScript podem ter tanto objetos quanto comportamentos (funções/ metodos)
// exportar a classe
export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    // inicializar os atributos de uma classe no momento em que um objeto é criado
    constructor(nome, cpf) {
        // Inicializa o atributo nome com o valor passado como parâmetro
        this.nome = nome;
        // Inicializa o atributo cpf com o valor passado como parâmetro
        this._cpf = cpf;
    }

}