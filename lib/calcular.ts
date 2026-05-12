const regexDigito = "\\.\\d+|\\d+(?:\\.\\d*)?";
const regexOperadorBin = "[-+*/]";
const regexOperadorUni = "(?:!|(?<!%)%)";
const regexGrupoInterno = `(${regexOperadorBin})(${regexDigito})|(${regexOperadorUni})`;

export function calcular(texto: string) {
  const regexValidacao = new RegExp(
    `^(-?)(${regexDigito})((?:${regexGrupoInterno})*)$`,
    "g",
  );

  const regexInterno = new RegExp(regexGrupoInterno, "g");
  const textoLimpo = texto.replaceAll(/\s+/g, "");

  const tokens: string[] = [];

  const matcher = regexValidacao.exec(textoLimpo);
  if (matcher !== null) {
    if (matcher[1] !== "") {
      tokens.push(matcher[1]);
    }
    tokens.push(matcher[2]);
    if (matcher[3] !== "") {
      let matcherInterno: RegExpExecArray | null;
      while ((matcherInterno = regexInterno.exec(matcher[3])) !== null) {
        if (matcherInterno[3] !== undefined) {
          tokens.push(matcherInterno[3]);
        } else {
          tokens.push(matcherInterno[1]);
          tokens.push(matcherInterno[2]);
        }
      }
    }
  }

  // abstract class operadorBin {
  //   a: number;
  //   b: number;

  //   constructor(a: number, b: number) {
  //     this.a = a;
  //     this.b = b;
  //   }

  //   abstract operation(): number;
  // }

  // class soma extends operadorBin {
  //   operation(): number {
  //     return this.a + this.b;
  //   }
  // }

  // class subtracao extends operadorBin {
  //   operation(): number {
  //     return this.a - this.b;
  //   }
  // }

  // class multiplicacao extends operadorBin {
  //   operation(): number {
  //     return this.a * this.b;
  //   }
  // }

  // class divisao extends operadorBin {
  //   operation(): number {
  //     return this.a / this.b;
  //   }
  // }

  for (
    let i = tokens.indexOf("%");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("%", i)
  ) {
    tokens[i - 1] = (Number.parseFloat(tokens[i - 1]) / 100).toString();
    tokens.splice(i, 1);
  }

  for (
    let i = tokens.indexOf("/");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("/", i)
  ) {
    tokens[i - 1] = (
      Number.parseFloat(tokens[i - 1]) / Number.parseFloat(tokens[i + 1])
    ).toString();
    tokens.splice(i, 2);
  }

  for (
    let i = tokens.indexOf("*");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("*", i)
  ) {
    tokens[i - 1] = (
      Number.parseFloat(tokens[i - 1]) * Number.parseFloat(tokens[i + 1])
    ).toString();
    tokens.splice(i, 2);
  }

  for (
    let i = tokens.indexOf("-");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("-", i)
  ) {
    tokens[i] = "+";
    tokens[i + 1] = (-1 * Number.parseFloat(tokens[i + 1])).toString();
  }

  for (
    let i = tokens.indexOf("+");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("+", i)
  ) {
    if (tokens[i - 1] === undefined) {
      tokens[i - 1] = (0 + Number.parseFloat(tokens[i + 1])).toString();
      tokens.splice(i, 1);
    } else {
      tokens[i - 1] = (
        Number.parseFloat(tokens[i - 1]) + Number.parseFloat(tokens[i + 1])
      ).toString();
      tokens.splice(i, 2);
    }
  }

  if (tokens.length > 0) {
    return Number.parseFloat(tokens[0]);
  }
  return "Expressão Inválida";
}
