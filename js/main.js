// QUERYS

const input = document.querySelector('.js_inputNumber');
const btn = document.querySelector('.js_btn');
const tryNumber = document.querySelector('.js_tryNumber');
const result = document.querySelector('.js_result');



// FUNCTIONS

//Genera un número aleatorio
function getRandomNumber(max) { 
    return Math.floor(Math.random() * (max + 1)); 
}

//Coge el valor que el usuario introduce en el input
function collectNumberGuess() {
    const numberGuess = parseInt(input.value);
    return numberGuess;
}

//Compara el valor introducido por la usuaria con el generado por el ordenador
function numberComparison (numberGuess, computerNumber) {
    if (numberGuess <= 0 || numberGuess > 100) {
        result.innerHTML = 'El número debe estar entre 1 y 100'
    }
    else if (numberGuess > computerNumber) {
        result.innerHTML = 'Demasiado alto'
    }
    else if (numberGuess < computerNumber) {
        result.innerHTML = 'Demasiado bajo'
    }
    else if (numberGuess === computerNumber) {
        result.innerHTML = 'Has ganado campeona!!!'
    }
}

//Cuenta las veces que has pulsado el botón Prueba
function counterGuess () {
    let numOfTries = parseInt(tryNumber.innerHTML); 
    numOfTries += 1;
    tryNumber.innerHTML = numOfTries;
}




// EVENTS/FUNCTIONS

const handleClickBtn = () => {
    const numberGuess = collectNumberGuess();
    numberComparison(numberGuess, computerNumber);
    counterGuess();
}

btn.addEventListener('click', handleClickBtn);





// ACTIONS WHEN THE PAGE IS CHARGED

//Se recoge el número generado por el ordenador en una variable y se muestra en la consola
const computerNumber = getRandomNumber(100);
console.log(`El número que ha generado el ordenador es: ${computerNumber}.`);
