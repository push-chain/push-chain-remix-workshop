# Contract Helpers: UEAFactory Lookups

This tutorial now demonstrates two read-only helper calls to the on-chain `UEAFactory` on Push Chain testnet:

- `getUEAForOrigin`: compute the deterministic UEA address for a given Universal Account ID and check if it’s deployed.
- `getOriginForUEA`: given any Push Chain address (UEA or native), return the origin information and whether it’s a UEA.

References:

- Docs: [Contract Helpers → UEAFactory](https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/#ueafactory--getueafororigin)

Files:

- `PushChain/contract-call/getUEAForOrigin.js`
- `PushChain/contract-call/getOriginForUEA.js`

How to run (in Remix’s script runner):

1. Open either file above in the editor.
2. In the terminal, run `remix.execute()` to execute the currently open file.
3. Check the console output for results.

Notes:

- Both scripts use `ethers` v6 with a public RPC: `https://evm.rpc-testnet-donut-node1.push.org/`.
- For non-EVM origins (e.g., Solana), `owner` is returned in hex. The `getOriginForUEA.js` example shows optional Base58 conversion using `bs58`.
