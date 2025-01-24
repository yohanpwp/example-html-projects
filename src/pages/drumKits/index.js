const button = document.querySelectorAll('.drum');

let audio = new Audio('sounds/crash.mp3')

function handleClick(buttonInnerHTML) {
   switch (buttonInnerHTML) {
    case 'w':
        audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case 'a':
        audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case 's':
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case 'd':
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case 'j':
        audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case 'k':
        audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case 'l':
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    default:
        console.log(buttonInnerHTML)
        break;
   }
}

function handleKeyDown(event) {
   switch (event) {
    case 'w':
        audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
    case 'a':
        audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case 's':
        audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case 'd':
        audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case 'j':
        audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case 'k':
        audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case 'l':
        audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    default:
        break;
   }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(() => activeButton.classList.remove('pressed'), 100);
}

// Using forEach() to add event listener to all buttons
button.forEach(button => button.addEventListener('click', function() {
    let buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
}
));

button.forEach(button => button.addEventListener('keydown', (event) => {
    handleKeyDown(event.key)
    buttonAnimation(event.key)
}));

