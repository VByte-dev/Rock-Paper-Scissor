let b1 = document.querySelector('#b1');
b1.addEventListener('click', R)

let b2 = document.querySelector('#b2');
b2.addEventListener('click', P)

let b3 = document.querySelector('#b3');
b3.addEventListener('click', S)

// Rock, Paper, Result Functions

let pScore = 0;
let bScore = 0;

function R(){
    let playerResult = document.querySelector('#resultPlayerC').innerHTML = 'Player : Rock';

    let randomN = Math.floor(Math.random() * 3);
    let enemyC = ['Rock', 'Paper', 'Scissor'][randomN];

    console.log(enemyC);

    let botResult = document.querySelector('#resultBotC');
    botResult.innerHTML = `Bot : ${enemyC}`;

    if (enemyC == 'Rock'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Tie';

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😐';
    }
    else if(enemyC == 'Paper'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Bot'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😥';
        bScore += 1;

    }
    else if(enemyC == 'Scissor'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Player'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😁';
        pScore += 1;
    }

    document.querySelector('#scoreP').innerHTML = `Player : ${pScore}`;
    document.querySelector('#scoreB').innerHTML = `Bot : ${bScore}`;
}

function P(){
    let playerResult = document.querySelector('#resultPlayerC').innerHTML = 'Player : Paper';

    let randomN = Math.floor(Math.random() * 3);
    let enemyC = ['Rock', 'Paper', 'Scissor'][randomN];

    console.log(enemyC);

    let botResult = document.querySelector('#resultBotC');
    botResult.innerHTML = `Bot : ${enemyC}`;

    if (enemyC == 'Paper'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Tie'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😐';
    }
    else if(enemyC == 'Rock'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Player'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😀';
        pScore += 1;
    }
    else if(enemyC == 'Scissor'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Bot'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😥';
        bScore += 1;
    }

    document.querySelector('#scoreP').innerHTML = `Player : ${pScore}`;
    document.querySelector('#scoreB').innerHTML = `Bot : ${bScore}`;
}

function S(){
    let playerResult = document.querySelector('#resultPlayerC').innerHTML = 'Player : Scissor';

    let randomN = Math.floor(Math.random() * 3);
    let enemyC = ['Rock', 'Paper', 'Scissor'][randomN];

    console.log(enemyC);

    let botResult = document.querySelector('#resultBotC');
    botResult.innerHTML = `Bot : ${enemyC}`;

    if (enemyC == 'Scissor'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Tie'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😐';
    }
    else if(enemyC == 'Rock'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Bot'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😥';
        bScore += 1;
    }
    else if(enemyC == 'Paper'){
        let winnerResult = document.querySelector('#resultResultC');
        winnerResult.innerHTML = 'Winner : Player'

        let resultEmoji = document.querySelector('#emojiC').innerHTML = '😀';
        pScore += 1;
    }
    
    document.querySelector('#scoreP').innerHTML = `Player : ${pScore}`;
    document.querySelector('#scoreB').innerHTML = `Bot : ${bScore}`;
}
