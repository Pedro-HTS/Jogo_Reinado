import Leveis from "./scriptConstructDataLeveis.js";
import { startPlay } from "./gameSystem.js";

var canStart = true;
export var level = 0;

const Info = document.getElementById("INFO");
const Fim = document.getElementById("FIM");
const btt = document.getElementById("startBtt");
const levelText = document.getElementById("level");
const acertoBtt = document.getElementById("closeWindon");
export const acertoText = document.getElementById("Acerto");

btt.addEventListener("click", () => (canStart ? StartGame(level) : null));
acertoBtt.addEventListener("click", () => acertoFecha());

setInfo();

function setInfo() {
  levelText.innerText = `Level: ${level + 1}`;
}

function StartGame(index) {
  // console.log("start");
  canStart = false;
  Info.style.visibility = "hidden";
  Fim.style.visibility = "hidden";
  const _baseColor = Math.round(Math.random() * 360);
  startPlay(
    Leveis[index].linhas,
    Leveis[index].objL,
    Leveis[index].qtt,
    _baseColor,
    Leveis[index].colChange
  );
}

export function EndGame() {
  setInfo();
  level++;
  if (level < Leveis.length) {
    // console.log("passou")
    canStart = true;
    levelText.innerText = `Level: ${(level + 1)}`;
  } else {
    Info.innerText = "Parábens! Você completou todos os leveis!";
  }
  Info.style.visibility = "visible";
  Fim.style.visibility = "visible";
}

function acertoFecha() {
  Fim.style.visibility = "hidden";
}

// Simples tamanho de tela
const Jogo = document.getElementById("Jogo");
Jogo.style.width = `80%`;
Jogo.style.height = `80%`;
