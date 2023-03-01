var personagem = document.getElementById('personagem');
var pulando = false;
var posicao = 0;
var puloIntervalo;

function pular() {
	if (pulando) return;
	pulando = true;
	posicao = 0;
	puloIntervalo = setInterval(subir, 10);
}

function subir() {
	if (posicao >= 150) {
		clearInterval(puloIntervalo);
		puloIntervalo = setInterval(descer, 10);
	}
	else {
		posicao += 5;
		personagem.style.bottom = posicao + 'px';
	}
}

function descer() {
	if (posicao <= 0) {
		clearInterval(puloIntervalo);
		pulando = false;
	}
	else {
		posicao -= 5;
		personagem.style.bottom = posicao + 'px';
	}
}

document.addEventListener('keydown', function(event) {
	if (event.keyCode === 32) {
		pular();
	}
});