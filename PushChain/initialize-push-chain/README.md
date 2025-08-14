# UEA Origin Demo (Calling getOriginForUEA from Solidity)

In this step, we will create a minimal Solidity contract that demonstrates how to call the Push Chain `UEAFactory.getOriginForUEA()` function from on-chain code.

References:

- Tutorial example: [Universal Counter (contract calling getOriginForUEA)](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter/)
- Concepts: [Account types on Push Chain](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain)

What the contract does:

- Exposes a function named `discoverOrigin()` that calls `getOriginForUEA(msg.sender)` on the `UEAFactory` at `0x00000000000000000000000000000000000000eA`.
- Returns the origin `UniversalAccountId` and a boolean indicating whether the caller (`msg.sender`) is a Universal Execution Account (UEA).

Notes:

- The `UEAFactory` address is the predeploy used by Push Chain.
- If you want to compare with a more feature-rich example (including state changes), check the linked Universal Counter tutorial.
