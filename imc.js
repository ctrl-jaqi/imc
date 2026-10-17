const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const outputImc = document.getElementById("imc");
const outputResul = document.getElementById("resultado");
const buttonCalcular = document.getElementById("btnCalcular");

buttonCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    let imc = peso / (altura ** 2);

    let resultado = "";

    if (imc < 18.5) {
        resultado = "Bajo peso";
    } 
    else if (imc > 18.5 && imc < 25) {
        resultado = "Peso normal";
    } 
    else 
        resultado = "Sin clasificación";
    

    outputImc.value = imc;
    outputResul.value = resultado;
});