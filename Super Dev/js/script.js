const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');

function jump() {
    dino.classList.add('jump');

    setTimeout(() => {

        dino.classList.remove('jump');

    }, 750);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px',' ');

    if (pipePosition <= 500 && pipePosition > 0 && dinoPosition < 81) {

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        dino.style.animation = 'none';
        dino.style.bottom = '${dinoPosition}px';

        dino.src = '../imagens/dino3.gif';
        dino.style.width = '120px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);

