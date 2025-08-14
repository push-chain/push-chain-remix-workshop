# Welcome to Push Chain

Push Chain is the first True Universal Layer 1 blockchain, built as a 100% EVM-compatible Proof of Stake (PoS) chain. Deploy your Solidity smart contract once on Push Chain and instantly reach users on Ethereum, Solana, and other supported chains without changing on-chain code.

## Why Universal Transactions are powerful

Users can execute your Push Chain contracts from their home chain (for example, Ethereum Sepolia or Solana Devnet) in a single transaction, using their existing wallets and paying fees in their native tokens. This removes the need for custom bridges, extra wallets, and complex multi-chain UX.

For more information about Universal Transactions, see the [Universal Transactions](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/) documentation.

## Prerequisites

- Wallet connection: Connect an existing wallet (e.g., MetaMask, Phantom)
- Network configuration: Point your tools to Push Chain (typically Testnet for workshops)
- Testnet PC: Ensure you have testnet $PC to try transactions

## Account Types on Push Chain

As an EVM-compatible Universal Layer 1 blockchain, Push Chain naturally supports standard Ethereum accounts:

- **Externally Owned Accounts (EOAs)**<br />
  Standard private-key-controlled addresses (e.g. MetaMask wallets).

- **Smart Contract Accounts (Smart Accounts)**<br />
  On-chain contracts that hold logic (e.g. multisigs, social recovery wallets).

> Additionally, Push Chain innovates by introducing:

- **Universal Executor Accounts (UEAs)**<br />
  Proxy accounts that represent external chain wallets ( users ) on Push Chain.
  UEAs let Ethereum, Solana, and other wallets execute Push Chain logic without the need for a native Push Chain wallet. This significantly enhances accessibility and overal UX.

- **Universal Origin Accounts (UOAs)**<br />
  The original source-chain wallet in chain agnostic address format that is behind each UEA.
  UOAs let you attribute activity back to the user’s home chain.

Learn more in [Important Concepts → Account Types on Push Chain](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain).
