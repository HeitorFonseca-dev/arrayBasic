function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let IMC = peso.value /(altura.value*altura.value);

        resultado.innerHTML = (`O imc de ${nome.value} ${sobrenome.value} é ${IMC.toFixed(2)}`);

        pessoas = resultado;
        
        return (pessoas);
        

    }


    form.addEventListener('submit', recebeEventoForm)
    

 

}

meuEscopo();



