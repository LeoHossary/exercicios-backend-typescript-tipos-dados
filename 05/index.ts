const soletrar = (palavra: string): string => {
  //SOLUÇÃO DO PROFESSOR
  return palavra.split("").join("-");

  //------>SOLUÇÃO PENSADA PRIMEIRO
  // let resultado: string = "";
  // for (let index = 0; index < palavra.length; index++) {
  //   resultado += `${palavra[index]}`;

  //   if (index !== palavra.length - 1) {
  //     resultado += "-";
  //   }
  // }
  // return resultado;
};

console.log(soletrar("programador"));
