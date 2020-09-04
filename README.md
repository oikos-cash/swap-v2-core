# Swap V2

[![Actions Status](https://github.com/oikos-cash/swap-v2-core/workflows/CI/badge.svg)](https://github.com/oikos-cash/swap-v2-core/actions)
[![Version](https://img.shields.io/npm/v/@oikos/swap-v2-core)](https://www.npmjs.com/package/@oikos/swap-v2-core)

Swap v2 is a Tron port of Uniswap v2. In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@oikos-cash/swap-v2-core@latest/).

## Contract Addresses

| Chain   | Address                                                                                                       |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| Mainnet | [TPvAyF9bNTbP4xEkmgJKefh3pPtZsrqDHM](https://tronscan.org/#/contract/TPvAyF9bNTbP4xEkmgJKefh3pPtZsrqDHM)      |
| Nile    | [TFyQKFhnFxt45zA2rdmCswmXa1YNiDs46n](https://nile.tronscan.org/#/contract/TFyQKFhnFxt45zA2rdmCswmXa1YNiDs46n) |

Compiled with `solc 0.5.16+commit.9c3226ce.Emscripten.clang`.

# Local Development

The following assumes the use of `node v12`.

```
nvm use 12
```

## Install Dependencies

`npm install`

## Compile Contracts

`npm run compile`

## Run Tests

`npm test`

## Tron Deployment

Note: use Node <12 to use Truffle...

`npm run deploy` or `npm run deploy:nile`.
