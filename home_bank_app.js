let agencia; 
let conta; 
let cartoes; 
let emprestimos; 
let negativado; 

agencia = prompt("Agencia: ");
conta = prompt("Conta: ");
cartoes = prompt("Cartoes: ");
emprestimos = prompt("Emprestimos: ");
negativado = prompt("Negativado no spc?: ");

if (negativado == "Sim" || negativado == "sim"){
  negativo = true;   
} else if (negativo == "Não" || negativado == "não"){
  negativado = false;
} else{
  negativado = "Error ao ler a situação cadastal.";
}

alert(`Agencia: ${agencia} \n
Conta; ${conta} \n
Cartoes: ${cartoes} \n
Emprestimos: ${emprestimos} \n
Negativado: ${negativado}`); 