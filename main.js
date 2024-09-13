var_H1 = document.querySelector('h1');
var_H1.innerHTML = 'Secret Number';

varP = document.querySelector('p');
varP.innerHTML = 'Type a number between 1 and 10';

let secret_number = Math.floor((Math.random() * 10) + 1);

function verificarChute() {
    let guess = document.querySelector('input').value;
    
    if (guess == secret_number) {
        var_H1.innerHTML = 'Parabéns, você acertou!';
        let varButton = document.getElementById('reiniciar');
        varButton.removeAttribute('disabled');
    } else {
        if (guess < secret_number) {
            varP.innerHTML = 'Tente novamente, o número é maior.';
        } else {
            varP.innerHTML = 'Tente novamente, o número é menor.';
        }
    }
}
