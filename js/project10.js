// VARIABLES *****************

const video = document.querySelector(".video");
const btnPause = document.querySelector(".pause");
const btnGo = document.querySelector(".play");
const btnTapa = document.querySelector(".btnTapa");

btnGo.addEventListener("click", play);
btnPause.addEventListener("click", pause);

// EVENTOS *****************

document.addEventListener("DOMContentLoaded", playingVideo);

// FUNCIONES *****************

// F1 --------------------------

function pause() {
  video.pause();
  btnTapa.classList.toggle("tapando");
}

// F2 --------------------------

function play() {
  video.play();
  btnTapa.classList.toggle("tapando");
}

// F3 ---------------------------

function playingVideo() {
  video.play();
}
