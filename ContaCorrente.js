export class ContaCorrente {
    // Publico
    agencia;
    cliente;

    // quando tiver o underline na frente quer dizer que é privado (#saldo)
    // Privado
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
            return valor;
        } else {
            console.log(`Não foi possível efetuar o saque! Saldo insuficiente`);
        }

    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado !== undefined) {
            conta.depositar(valorSacado);
            console.log(`Transferência de R$${valor} realizada com sucesso.`);
        } else {
            console.log("Transferência falhou.");
        }
    }

    getSaldo() {
        return this._saldo;
    }
}