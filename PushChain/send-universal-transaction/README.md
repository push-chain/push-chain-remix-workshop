# Send a Universal Transaction

Send a native PC transfer on Push Chain using a Universal Transaction.

References:

- Docs: [Send Universal Transaction](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/)

How to run:

1. Open `PushChain/send-universal-transaction/sendTx.js`.
2. In the terminal, run `remix.execute()`.
3. Watch the console for streamed progress and the resulting tx hash.

Notes:

- Uses `pushChainClient.universal.sendTransaction({...})`.
- `value` is in uPC (wei-like). Use helpers to convert human amounts.

