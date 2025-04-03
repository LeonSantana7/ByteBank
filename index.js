// molde
class cliente {
    nome;
    cpf;

}
class contaCorrente{
    agencia;
    saldo = 0;
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
        }else{
            console.log(`Valor inválido para depósito`);
        }
    }
    sacar(valor){
        if(valor <= 0){
            console.log("Não foi possivel efetuar o saque!");
            return;
        }
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Seu saldo é ${this.saldo} ${this.saldo === 1 ? "real" : "reais"}`);
        }else{
            console.log(`Não foi possível efetuar o saque! Saldo insuficiente`)
        }
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
contaCorrenteLeon.depositar(100);

contaCorrenteLeon.sacar(-200);
console.log(contaCorrenteLeon.saldo);






console.log(cliente1);
console.log(cliente2);
