const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
/*
humanScoreNumber -> Camel Case
GAME_OPTIONS -> Snake Case -> quando se trata de ENUM
*/

//ENUMS:
const GAME_OPTIONS = {
ROCK: 'rock',
PAPER: 'paper',
SCISSORS: 'scissors'
}


const playHuman = (humanChoice) =>{
 
    playTheGame( humanChoice, playMachine() )
}


const playMachine = ( ) => {
const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
const randomNumber = Math.floor(Math.random() * 3) // Math.handom são numeros de (0 a 1), o Floor é responsável p arredondar o numero p baixo
return choices[randomNumber]
}



const playTheGame = (human, machine) => {

    console.log('Humanos: ' + human + 'Máquina: ' + machine)

    if (human === machine){
result.innerHTML = 'Deu empate! &#x1F632;'
    } else if((human === GAME_OPTIONS.PAPER&& machine === GAME_OPTIONS.ROCK) || (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) || (human === GAME_OPTIONS.SCISSORS&& machine === GAME_OPTIONS.PAPER)){
     humanScoreNumber++   
     humanScore.innerHTML = humanScoreNumber 
        result.innerHTML = 'Você ganhou! &#x1F60D;'
    }else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa! &#x1F62D;'
    }
}

/* 
papel => pedra => tesoura =>
> papel ganha da pedra
> pedra ganha da tesoura
> tesoura ganha do papel
*/