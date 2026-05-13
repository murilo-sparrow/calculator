# Calculator

Aplicativo de calculadora construído com Expo, React Native e TypeScript.

O projeto usa uma interface própria com teclado numérico, suporte a parênteses, porcentagem, operações básicas e cálculo com precisão decimal via `decimal.js`.

## Funcionalidades

- Soma, subtração, multiplicação e divisão
- Percentual com `%`
- Números decimais
- Parênteses
- Botão de apagar último caractere
- Validação e cálculo da expressão em `lib/calcular.ts`

## Tecnologias

- Expo 54
- React Native 0.81
- TypeScript
- decimal.js
- Vitest

## Requisitos

- Node.js ou Bun instalados
- Expo Go, emulador ou simulador para executar o app

## Instalação

```bash
bun install
```

## Como executar

Inicie o projeto com:

```bash
bun run start
```

Outros comandos úteis:

```bash
bun run android
bun run ios
bun run web
```

## Como testar

```bash
bun run test
```

## Estrutura do projeto

- `App.tsx`: interface principal da calculadora
- `KeyboardButton.tsx`: componente dos botões do teclado
- `lib/calcular.ts`: lógica de cálculo da expressão
- `lib/calcular.test.ts`: testes da função de cálculo

## Observações

- A expressão é processada localmente no app.
- A lógica atual foi escrita para lidar com entradas comuns de calculadora, incluindo precedência entre operadores e expressões com parênteses.
