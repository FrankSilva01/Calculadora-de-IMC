






const calcular = document.getElementById ('calcular');

// IMC = Peso ÷ (Altura × Altura)


function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');


    if (nome.value !==  '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed (2);
       

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (valorIMC < 25){
                classificacao = "com o peso ideal. Parabéns";
        } else if (valorIMC < 30) {
            classificacao = "levemente acima do peso";
        } else if (valorIMC < 35) {
            classificacao = "Obesidade grau I.";
        } else if (valorIMC < 40) {
            classificacao = "com Obesidade grau II.";
        } else {
            classificacao = "com obseidade grau III. Cuidado!";
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;   

        

        } else {

            resultado.textContent = "Preencha todos os campos"

            
        }

    }

    calcular.addEventListener ('click', imc);
