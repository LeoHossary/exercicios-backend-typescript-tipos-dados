const imprimirEtiquetas = (produto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string => {
  let resultado: string = "";
  for (let i = 1; i <= produto.qtd; i++) {
    resultado += `${produto.lote}-${produto.ano}-${i
      .toString()
      .padStart(3, "0")} \n`;
  }

  return resultado;
};

console.log(
  imprimirEtiquetas({
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
);
