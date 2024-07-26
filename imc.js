const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'mete mt, esbagaça.';
        }else if (valorIMC < 25) {
            classificacao = 'mete meio, da pra brincar';
        }else if (valorIMC < 30){
            classificacao = 'balofo.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau mórbida.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade montanha';
        }else {
            classificacao = 'goza rapido';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);