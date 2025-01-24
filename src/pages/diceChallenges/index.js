const randomNumber1 = Math.ceil(Math.random()*6);
const randomNumber2 = Math.ceil(Math.random()*6);

const dice1 = "../../../assets/dice/dice1.png" //เราสามารถนำ randomnumber ใส้ในชื่อไฟล์เพื่อสุ่มได้เลย
const dice2 = "../../../assets/dice/dice2.png"
const dice3 = "../../../assets/dice/dice3.png"
const dice4 = "../../../assets/dice/dice4.png"
const dice5 = "../../../assets/dice/dice5.png"
const dice6 = "../../../assets/dice/dice6.png"

// Change the image equal to the random number
function changeRandomDice(player,randomNumber) {
    let image = document.createElement("img")
    if (player === 1){
        image = document.getElementById('img1')
    } else if (player === 2){
        image = document.getElementById('img2')
    }
    
    switch (randomNumber) {
        case 1:
            image.src = dice1
            break;
        case 2:
            image.src = dice2
            break;
        case 3:
            image.src = dice3
            break;
        case 4:
            image.src = dice4
            break;
        case 5:
            image.src = dice5
            break;
        case 6:
            image.src = dice6
            break;
        default:
            image.src = dice6
            break;
    }
}

function declareWinner(num1,num2) {
    if (num1 > num2) {
        document.getElementById('winner').innerHTML = "Player 1 wins!"
    } else if (num1 < num2) {
        document.getElementById('winner').innerHTML = "Player 2 wins!"
    } else {
        document.getElementById('winner').innerHTML = "It's a tie!"
    }
}

changeRandomDice(1, randomNumber1)

changeRandomDice(2, randomNumber2)

declareWinner(randomNumber1, randomNumber2)