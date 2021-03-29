let win = 0
let loss = 0
let tie = 0
function play(playerChoice) {
    options = ['rock', 'paper', 'scissors']
    let result = ''

    let computerChoice = options[Math.floor(Math.random() * 3)]
    document.getElementById('a-choice').innerText = computerChoice
    console.log(playerChoice, computerChoice);
    if (playerChoice == computerChoice) {
        result = 'ITS A TIE';
        tie++
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result = 'YOU WIN';
        win++
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        result = 'YOU WIN';
        win++
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        result = 'YOU WIN';
        win++
    } else {
        result = 'YOU LOSE';
        loss++
    }
    document.getElementById('result').innerHTML = result
    document.getElementById('win').innerHTML = `Wins ${win}`
    document.getElementById('loss').innerHTML = `Losses ${loss}`
    document.getElementById('tie').innerHTML = `Ties ${tie}`
}
