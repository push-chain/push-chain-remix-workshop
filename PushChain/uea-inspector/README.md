# Solidity UEAFactory Helper

Deploy and call a minimal contract that queries Push Chain's `UEAFactory` to return the origin metadata of `msg.sender`.

References:

- Concepts: [Account types on Push Chain](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain)

How to run:

1. Open `PushChain/uea-inspector/UEAInspector.sol` and compile in Remix Solidity.
2. Deploy on Push Chain Testnet.
3. Call `whoAmI()`; it returns the origin account and whether the caller is a UEA.

