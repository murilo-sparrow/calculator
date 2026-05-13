import { expect, test } from "vitest";
import { calcular } from "./calcular";

test("Recebe '1 + 2' retorna 3", () => {
  expect(calcular("1 + 2")).toBe("3");
});

test("Recebe '1 + 3 * 5' retorna 16", () => {
  expect(calcular("1 + 3 * 5")).toBe("16");
});

test("Recebe '1 + 3 * 5' retorna 16", () => {
  expect(calcular("6 / 3 * 5")).toBe("10");
});

test("Recebe '1 + 3 * 5' retorna 16", () => {
  expect(calcular("6 * 3 /2")).toBe("9");
});

test("Recebe '- 3 - 8' retorna -11", () => {
  expect(calcular("- 3 - 8")).toBe("-11");
});

test("Recebe '10/2' retorna 5", () => {
  expect(calcular("10/2")).toBe("5");
});

test("Recebe '10*2' retorna 20", () => {
  expect(calcular("10*2")).toBe("20");
});

test("Recebe '30%' retorna 0.3", () => {
  expect(calcular("30%")).toBe("0.3");
});

test("Recebe '5.5 + 4' retorna 9.5", () => {
  expect(calcular("5.5 + 4")).toBe("9.5");
});

test("Recebe '(5)' retorna 5", () => {
  expect(calcular("(5)")).toBe("5");
});

test("Recebe '(5 + 4)' retorna 9", () => {
  expect(calcular("(5 + 4)")).toBe("9");
});

test("Recebe '(5 + 4) + 2' retorna 11", () => {
  expect(calcular("(5 + 4) +2 ")).toBe("11");
});

test("Recebe '(8) +5 * (15+5)' retorna 108", () => {
  expect(calcular("(8) +5 * (15+5)")).toBe("108");
});

test("Recebe '52 + (5 * (8 - 2))' retorna 82", () => {
  expect(calcular("52 + (5 * (8 - 2))")).toBe("82");
});
