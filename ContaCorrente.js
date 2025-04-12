import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    // Publico
    // Static é uma propriedade que pertence à classe em si, e não a uma instância específica da classe.
    static numeroDeContas = 0;
    agencia;

    // quando tiver o underline na frente quer dizer que é privado (#saldo)
    // Privado
    _saldo = 0;
    _cliente;

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(novoValor) {
        // Verifica se o novo valor é uma instância da classe Cliente
        if (novoValor instanceof Cliente) {
            // Se for, atribui o novo valor ao atributo privado _cliente
            this._cliente = novoValor;
        }
    }

    get cliente() {
        // Retorna o valor do atributo privado _cliente
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

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
}