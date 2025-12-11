This section wraps up what you built and learned across `Push Chain` from a Solidity developer’s point of view, and points you to the best next steps.

## What you learned

As a Solidity dev, you now know how to:

- **Deploy once, reach many chains**: Deploy a standard Solidity contract (like `HelloPush`) to Push Chain Donut Testnet from Remix, just like any other EVM chain.
- **Let users stay on their home chain**: Use Universal Transactions so users sign and pay gas on their origin chain (EVM or non‑EVM) while your contract executes on Push Chain.
- **Rely on smart accounts for external users**: Work with Universal Executor Accounts (UEAs) — essentially the user’s smart account on Push Chain — automatically created and funded behind the scenes.
- **Discover who the caller really is**: Use on‑chain helpers (`UEAFactory`) and SDK utilities to map between a Push Chain executor address and the user’s origin wallet and chain (Universal Origin Account / UOA).
- **Write chain‑aware contract logic**: Build contracts like `UniversalCounter` that branch behavior based on the caller’s origin (for example, per‑chain counters, limits, or permissions) without bridges or custom interoperability code.

Under the hood, Push Chain is a universal, EVM‑compatible Layer 1 that lets you **deploy your Solidity contract once and reach users from EVM and non‑EVM chains without rewriting on‑chain code**, while the platform handles fee abstraction and cross‑chain plumbing for you.

## Recommended next steps and resources

- **Ship your own contract on Push Chain**
  - Take a contract you already use on another EVM chain, deploy it to Push Chain Donut Testnet (same Remix flow as in chapter 1).
  - Then try calling it from a different origin chain to see your own cross‑chain app in action.

- **Go deeper on concepts**
  - Intro to Push Chain — key concepts and motivations: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/" target="_blank">Docs Home</a>
  - Important Concepts — account types, universal model, fee abstraction: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/" target="_blank">Important Concepts</a>

- **Build a full universal app**
  - Universal Counter App (advanced tutorial with UI): <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter/" target="_blank">Tutorial</a>

- **Use the SDKs and helpers in your stack**
  - Create Universal Signer: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/create-universal-signer/" target="_blank">Guide</a>
  - Initialize Push Chain Client: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/initialize-push-chain-client/" target="_blank">Guide</a>
  - Initialize EVM Client: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/initialize-evm-client/" target="_blank">Guide</a>
  - Send Universal Transaction: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/" target="_blank">Guide</a>
  - Sign Universal Message: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/sign-universal-message/" target="_blank">Guide</a>
  - Reading Blockchain State: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/reading-blockchain-state/" target="_blank">Guide</a>
  - Contract Helpers: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/" target="_blank">Guide</a>

- **Add Push Chain to your dApp UI**
  - UI Kit SDK — React hooks and components to easily add Push Chain to your dApp: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/ui-kit/" target="_blank">UI Kit</a>

From here, the best next step is to take a contract or dApp you already have, deploy it to Push Chain Donut Testnet, wire it up with Universal Transactions and origin discovery, and see what new cross‑chain experiences you can unlock for your users.
