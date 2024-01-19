const soletrar = (palavra: string): string => {
  let resultado: string = "";
  for (let index = 0; index < palavra.length; index++) {
    resultado += `${palavra[index]}`;

    if (index !== palavra.length - 1) {
      resultado += "-";
    }
  }
  return resultado;
};

console.log(soletrar("programador"));
