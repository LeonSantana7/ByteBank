// importar
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"

const contas = [];

function atualizarInterface() {
    const lista = document.getElementById("listaContas");
    const contaSelecionada = document.getElementById("contaSelecionada");
    const contaOrigem = document.getElementById("contaOrigem");
    const contaDestino = document.getElementById("contaDestino");

    lista.innerHTML = "";
    contaSelecionada.innerHTML = "";
    contaOrigem.innerHTML = "";
    contaDestino.innerHTML = "";

    contas.forEach((conta, index) => {
        const card = document.createElement("div");
        card.className = "conta-card";
        card.innerHTML = `
            <strong>${conta.cliente.nome}</strong><br>
            Agência: ${conta.agencia}<br>
            CPF: ${conta.cliente.cpf}<br>
            Saldo: R$ ${conta.saldo}
        `;
        lista.appendChild(card);

        const opt1 = new Option(conta.cliente.nome, index);
        contaSelecionada.appendChild(opt1);

        const opt2 = new Option(conta.cliente.nome, index);
        contaOrigem.appendChild(opt2);

        const opt3 = new Option(conta.cliente.nome, index);
        contaDestino.appendChild(opt3);
    });
}

function criarConta() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const agencia = document.getElementById("agencia").value;

    if (!nome || !cpf || !agencia) {
        alert("Preencha todos os campos");
        return;
    }

    const cliente = new Cliente(nome, cpf);
    const conta = new ContaCorrente(cliente, agencia);
    contas.push(conta);

    atualizarInterface();
}

function depositar() {
    const index = document.getElementById("contaSelecionada").value;
    const valor = parseFloat(document.getElementById("valorOperacao").value);
    if (!valor || valor <= 0) return alert("Valor inválido");

    contas[index].depositar(valor);
    atualizarInterface();
}

function sacar() {
    const index = document.getElementById("contaSelecionada").value;
    const valor = parseFloat(document.getElementById("valorOperacao").value);
    if (!valor || valor <= 0) return alert("Valor inválido");

    contas[index].sacar(valor);
    atualizarInterface();
}

function transferir() {
    const origem = document.getElementById("contaOrigem").value;
    const destino = document.getElementById("contaDestino").value;
    const valor = parseFloat(document.getElementById("valorTransferencia").value);
    if (origem === destino) return alert("Contas devem ser diferentes");
    if (!valor || valor <= 0) return alert("Valor inválido");

    contas[origem].transferir(valor, contas[destino]);
    atualizarInterface();
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCriarConta").addEventListener("click", criarConta);
    document.getElementById("btnDepositar").addEventListener("click", depositar);
    document.getElementById("btnSacar").addEventListener("click", sacar);
    document.getElementById("btnTransferir").addEventListener("click", transferir);
    atualizarInterface();
});

// objeto
// // instancia do objeto (criar uma nova copia a partir do molde)
// const cliente1 = new Cliente("Leon", 11122233309);
// const cliente2 = new Cliente("Alice", 88822233309);


// const contaCorrenteLeon = new ContaCorrente(cliente1, 1001);
// const conta2 = new ContaCorrente(cliente2, 102);













