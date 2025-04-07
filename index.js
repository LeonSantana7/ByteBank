// molde
//classes em JavaScript podem ter tanto objetos quanto comportamentos (funções/ metodos)
class cliente {
    nome;
    cpf;

}
class contaCorrente {
    agencia;
    // quando tiver o underline na frente quer dizer que é privado
    // #saldo
    _saldo = 0;

    // fazer a operação com tal valor(parâmetro)
    depositar(valor) {
        if (valor > 0) {
            // this se refere ao objeto que está chamando o método
            this._saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this._saldo}`)
        } else {
            console.log(`Valor inválido para depósito`);
        }
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log("Não foi possivel efetuar o saque!");
            return;
        }
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`Seu saldo é ${this._saldo} ${this._saldo === 1 ? "real" : "reais"}`);
        } else {
            console.log(`Não foi possível efetuar o saque! Saldo insuficiente`)
        }
    }
    getSaldo() {
        return this._saldo;
    }
}

// objeto
// instancia do objeto (criar uma nova copia a partir do molde)
const cliente1 = new cliente();
cliente1.nome = "Leon";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteLeon = new contaCorrente();
contaCorrenteLeon.agencia = 1001;
console.log("----------------------------------------------");
contaCorrenteLeon.depositar(100);
console.log("----------------------------------------------");
contaCorrenteLeon.depositar(50);
console.log("----------------------------------------------");
contaCorrenteLeon.sacar(20);
console.log("----------------------------------------------");

console.log(contaCorrenteLeon)
console.log("----------------------------------------------");
console.log("Saldo atual: R$", contaCorrenteLeon.getSaldo());



