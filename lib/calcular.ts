import Decimal from "decimal.js";

const regexDigito = "\\.\\d+|\\d+(?:\\.\\d*)?";
const regexOperadorBin = "[-+*/]";
const regexOperadorUni = "(?:!|(?<!%)%)";
const regexGrupoInterno = `(${regexOperadorBin})(${regexDigito})|(${regexOperadorUni})`;
const parenteses = `\\(([^()]+)\\)`;

export function calcular(texto: string) {
  const regexValidacao = new RegExp(
    `^(-?)(${regexDigito})((?:${regexGrupoInterno})*)$`,
    "g",
  );

  const regexInterno = new RegExp(regexGrupoInterno, "g");
  let textoLimpo = texto.replaceAll(/\s+/g, "");

  let RegexParenteses = new RegExp(parenteses, "g");
  let matcher = RegexParenteses.exec(textoLimpo);
  while (matcher !== null) {
    textoLimpo = textoLimpo.replace(
      matcher[0],
      calcular(matcher[1]).toString(),
    );
    RegexParenteses = new RegExp(parenteses, "g");
    matcher = RegexParenteses.exec(textoLimpo);
  }

  const tokens: string[] = [];

  matcher = regexValidacao.exec(textoLimpo);
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

  Decimal.set({ precision: 9 });

  for (
    let i = tokens.indexOf("%");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("%", i)
  ) {
    tokens[i - 1] = new Decimal(tokens[i - 1]).dividedBy("100").toString();
    tokens.splice(i, 1);
  }

  for (
    let i = tokens.indexOf("/");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("/", i)
  ) {
    tokens[i - 1] = new Decimal(tokens[i - 1])
      .dividedBy(tokens[i + 1])
      .toString();
    tokens.splice(i, 2);
  }

  for (
    let i = tokens.indexOf("*");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("*", i)
  ) {
    tokens[i - 1] = new Decimal(tokens[i - 1]).times(tokens[i + 1]).toString();
    tokens.splice(i, 2);
  }

  for (
    let i = tokens.indexOf("-");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("-", i)
  ) {
    tokens[i] = "+";
    tokens[i + 1] = new Decimal(tokens[i + 1]).neg().toString();
  }

  for (
    let i = tokens.indexOf("+");
    i < tokens.length && i >= 0;
    i = tokens.indexOf("+", i)
  ) {
    if (tokens[i - 1] === undefined) {
      tokens[i - 1] = tokens[i + 1];
      tokens.splice(i, 1);
    } else {
      tokens[i - 1] = new Decimal(tokens[i - 1]).plus(tokens[i + 1]).toString();
      tokens.splice(i, 2);
    }
  }

  if (tokens.length > 0) {
    return tokens[0];
  }
  return "Expressão Inválida";
}
