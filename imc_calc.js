//imc = peso/(altura*altura)

let peso;
let altura;

let imc;

let tipoImc;


peso = prompt("Peso: ");
altura = prompt("Altura ");

imc = peso / (altura * altura);

if  (imc < 18.5 && imc >= 0) {
    tipoImc = "MAGREZA";
}   else if(imc >= 18.5 && imc <=24.9) { 
    tipoImc = "NORMAL";
}   else if(imc >= 25 && imc <= 29.9) {
    tipoImc = "SOBREPESO";
}   else if(imc >=30 && imc <= 39.9) {
    tipoImc= "OBESIDADE";
}   else if (imc >= 40){
    tipoImc= "OBESIDADE GRAVE";
}   else {
    tipoImc = "ERROR AO CALCULAR O IMC";
}

 
alert(`Seu IMC é de ${imc} kg/m2. O seu tipo de IMC é ${tipoImc}.`);


// MENOR QUE 18,5	    MAGREZA	        0 
// ENTRE 18,5 E 24,9	NORMAL	        0
// ENTRE 25,0 E 29,9	SOBREPESO	    I
// ENTRE 30,0 E 39,9	OBESIDADE	    II
// MAIOR QUE 40,0	    OBESIDADE GRAVE	III