# Initialize Push Chain

In this step, you'll initialize the Push Chain core client using ethers v6 and a Universal Signer, importing both from ESM CDNs so it runs directly in Remix.

Reference: Initialize Push Chain Client docs: [Initialize Push Chain Client](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/initialize-push-chain-client/)

How to run:

1. Open `PushChain/initialize-push-chain/initPushChain.js`.
2. In the terminal, run `remix.execute()` to execute the current file.
3. Check the Remix console for the output.

Notes:

- This example uses `ethers@6` and `@pushchain/core` via CDN ESM imports, so no npm install is required.
- The script creates a random wallet and connects to Sepolia via Tenderly public RPC. No transactions are sent.
- If your environment blocks external CDNs, use a local Node.js setup instead and install packages with npm.
