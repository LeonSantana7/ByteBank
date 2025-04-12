// importar
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js"
// objeto
// instancia do objeto (criar uma nova copia a partir do molde)
const cliente1 = new Cliente();
cliente1.nome = "Leon";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteLeon = new ContaCorrente();
contaCorrenteLeon.cliente = cliente1;
contaCorrenteLeon.agencia = 1001;
contaCorrenteLeon.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteLeon.transferir(500, conta2);

console.log(contaCorrenteLeon);
console.log(conta2);



