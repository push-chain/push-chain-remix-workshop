# Welcome to Push Chain

Push Chain is the first True Universal Layer 1 blockchain, built as a 100% EVM-compatible Proof of Stake (PoS) chain. Deploy your Solidity smart contract once on Push Chain and instantly reach users on Ethereum, Solana, and other supported chains without changing on-chain code.

## Why Universal Transactions are powerful

Users can execute your Push Chain contracts from their home chain (for example, Ethereum Sepolia or Solana Devnet) in a single transaction, using their existing wallets and paying fees in their native tokens. This removes the need for custom bridges, extra wallets, and complex multi-chain UX.

## Docs

- Universal Transactions: `https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/`
- Contract Helpers: `https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/`
- Push Chain Docs (overview): `https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/`

## Prerequisites

- Wallet connection: Connect an existing wallet (e.g., MetaMask, Phantom)
- Network configuration: Point your tools to Push Chain (typically Testnet for workshops)
- Testnet PC: Ensure you have testnet $PC to try transactions

## UEA and UOA (account types on Push Chain)

- Universal Executor Accounts (UEAs): Proxy accounts on Push Chain that represent external-chain wallets (your users). They enable users from Ethereum, Solana, and other chains to execute Push Chain logic without needing a native Push Chain wallet.
- Universal Origin Accounts (UOAs): Chain-agnostic representation of the user’s original source-chain wallet behind each UEA, letting you attribute activity back to the user’s home chain.

Learn more in Important Concepts → Account Types on Push Chain:
`https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain`
