const QtLinhas = [
  // Quantidade de linhas
  2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5
];

const ObjLinhas = [
  // Objeto por linha
  2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8
];

const ColorChange = [
  // É %
  90, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 25, 20, 15, 10, 5, 5, 2, 2, 1
];

const Quantidade = [
  // Quantos personagens são errados (é %)
  25, 25, 25, 25, 25, 25, 25, 40, 40, 40, 40, 40, 40, 40, 60, 60, 60, 80, 80, 80
];

const Leveis = QtLinhas.map((item, id) => {
  return { linhas: item, objL: ObjLinhas[id], colChange: ColorChange[id], qtt: Quantidade[id] };
});

// console.log(Leveis);

export default Leveis;
