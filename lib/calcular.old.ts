import { operadoresLista } from "../App";

export function calcular(texto: string): number {
  let operadores: string[] = [];
  let numeros: number[] = [];
  let i: number = 0;
  let resultado;

  for (let i = 0; i < texto.length; i++) {
    const element = texto[i];

    if (element !== " ") {
      let isOperador = false;
      operadoresLista.forEach((e) => {
        if (e === element) {
          isOperador = true;
        }
      });

      if (isOperador) {
        const operador = operadores[operadores.length - 1];

        if (operador === "x") {
          if (operadores.length > 0) {
            let anterior: string = operadores[operadores.length - 1];
            let vezes = 0;
            while (anterior === "x" || anterior === "/") {
              let a = numeros.length - 2;
              let b = numeros.length - 1;
              if (anterior === "x") {
                numeros[a] = numeros[a] * numeros[b];
              } else {
                numeros[a] = numeros[a] / numeros[b];
              }

              numeros.pop();
              operadores.pop();
              anterior = operadores[operadores.length - 1];
              console.log(vezes++);
            }
          }

          operadores.push(operador);
        } else if (operador === "/") {
        } else if (operador === "+") {
        } else if (operador === "-") {
        }
        operadores.push(element);
      } else {
        // numeros = numeros.concat(element);
      }
    }
  }

  if (operadores.length > 0) {
    const operador = operadores[operadores.length - 1];
    console.log(operador);

    const a = numeros[0];
    console.log(a);

    const b = numeros[1];
    console.log(b);
  }

  console.log("Resultado: " + resultado);

  return numeros[0];
}
