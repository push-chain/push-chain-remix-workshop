# Initialize Push Chain

In this step, you'll initialize the Push Chain core client using ethers v6 and a Universal Signer so it runs directly in Remix.

References:

- Initialize Client: [Initialize Push Chain Client](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/initialize-push-chain-client/)
- Concepts: [Account types on Push Chain](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain)

How to run:

1. Open `PushChain/initialize-push-chain/initPushChain.js`.
2. In the terminal, run `remix.execute()` to execute the current file.
3. Check the Remix console for the output.

What you'll see:

- A Universal Signer derived from an ethers v6 signer.
- A Push Chain client initialized for the Donut Testnet.
- Logs for your Universal Execution Account on Push Chain and the origin account metadata.

Notes:

- This example uses `ethers@6` and `@pushchain/core` via ESM, so no npm install is required in Remix.
- The script creates a random wallet and connects to Sepolia public RPC as the origin chain; no transactions are sent.
- If your environment blocks external CDNs, use a local Node.js setup and install packages with npm.
