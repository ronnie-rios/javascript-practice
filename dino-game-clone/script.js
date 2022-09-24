const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

function jump() {
    if(dino.classList != 'jump') {
        dino.classList.add("jump");
        setTimeout(() => {
            dino.classList.remove('jump');
        },250)
    }
};

let isAlive = setInterval(() => {
    //check y and x position of our dino and cactus
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle('cactus').getPropertyValue('left'));

    if (cactusLeft < 50  &&  cactusLeft > 0 && dinoTop >= 140) {
        alert('game over')
    }
}, 10)


document.addEventListener('keydown', (event) => {
    jump();
});