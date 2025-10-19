const btnPlayMusic = document.getElementById('btnPlayMusic');
const musica = document.getElementById('musica');

btnPlayMusic.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btnPlayMusic.textContent = 'Pausar música';
  } else {
    musica.pause();
    btnPlayMusic.textContent = 'Ouvir música de fundo';
  }
});
