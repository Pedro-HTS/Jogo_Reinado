import { EndGame } from "./script.js";

const Start = document.getElementById("START");
const ObjetosArray = [];
const GameData = {};

function setGameData(_linhas, _objLinhas, _porcentoErrado, _baseColor, _colorChange) {
  // Quantidade de personagens
  GameData.linhas = _linhas;
  GameData.objetoLinha = _objLinhas;
  GameData.quantidade = GameData.linhas * GameData.objetoLinha;
  // Personagens do maaaaaaaaal
  GameData.porcentoErrado = _porcentoErrado;
  GameData.qtd_Errado = Math.round((GameData.quantidade * GameData.porcentoErrado) / 100);
  // Constantes de cor
  GameData.baseColor = _baseColor;
  GameData.colorChange = _colorChange;
  // Constantes de configuração de tamanho
  GameData.ObjetoWidth = 100 / _objLinhas;
  GameData.ObjetoHeight = 100 / _linhas;
}

const setColors = (_quantidade, _qttErrado, _base, _change) =>{
  const colors = Array.from({ length: _quantidade }, () => [_base, false]);
  // debugger;
  for (let valor = 0; valor < _qttErrado; valor) {
    const entrada = Math.round(Math.random() * (_quantidade - 1));
    if (colors[entrada][0] == _base) {
      const aleatorio = Math.round(Math.random()) == 0 ? -1 : 1;
      colors[entrada][0] += aleatorio * _change;
      colors[entrada][1] = true;
      valor++;
    }
  }
  // console.log("final colors: ", colors);
  return(colors);
}

// Loop para adicionar objetos
function AddObjetos() {
  const Colors = setColors(GameData.quantidade, GameData.qtd_Errado, GameData.baseColor, GameData.colorChange);
  for (let _index = 0; _index < GameData.quantidade; _index++) {
    const objeto = document.createElement("div");
    inicializaObjeto(objeto, _index, Colors[_index][0], Colors[_index][1]);
    Start.appendChild(objeto);
    const img = new Image();
    img.src = "../imgs/Guard.png";
    img.classList.add("img");
    objeto.appendChild(img);
    ObjetosArray.push(objeto);
  }
}

// Função para modificar o visual dos objetos
function inicializaObjeto(_objeto, _index, _color, _wrong) {
  _objeto.classList.add(`objeto`);
  _objeto.style.width = `${GameData.ObjetoWidth}%`;
  _objeto.style.height = `${GameData.ObjetoHeight}%`;

  const tObjL = 100 / GameData.objetoLinha;
  const tLinhas = 100 / GameData.linhas;

  const posX = ((_index % GameData.objetoLinha) * tObjL);
  const posY = (Math.floor(_index / GameData.objetoLinha) * tLinhas);

  _objeto.style.left = `${posX}%`;
  _objeto.style.top = `${posY}%`;
  _objeto.style.filter = `hue-rotate(${_color}deg)`;

  // Dev view
  // _objeto.style.backgroundColor = "lightblue";
  // _objeto.style.border = "1px solid black";
  // const txt = document.createElement("h4");
  // txt.textContent = `Item ${_index + 1}`;
  // txt.style.position = "absolute";
  // txt.style.color = "white";
  // _objeto.appendChild(txt);

  // Listener do click
  _objeto.addEventListener("click", () => {
    if (_wrong) {
      endPlay();
      // Clicou no q tem a cor errada mesmo, tá certo! ~^-^~
    } else {
      endPlay();
      // Opa, clicou em um dos nossos, mas aconteçe!
    }
  });
}

function remObjetos() {
  for (let index = ObjetosArray.length - 1; index >= 0; index--) {
    // console.log(Objetos[index]);
    ObjetosArray[index].remove();
    ObjetosArray.pop();
  }
}

export function startPlay(_linhas, _objPorLinha, _porcentoErrado, _baseColor, _colorChange) {
  setGameData(_linhas, _objPorLinha,  _porcentoErrado, _baseColor, _colorChange);
  AddObjetos();
}

function endPlay() {
  EndGame();
  remObjetos();
}
