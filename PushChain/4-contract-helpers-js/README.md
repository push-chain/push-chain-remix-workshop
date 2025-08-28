Overview of the helper script that interacts with the on-chain `UEAFactory` on Push Chain testnet.

## `ueaFactory.js`

This combined script demonstrates both main functions of the UEAFactory contract:

### `getOriginForUEA` function

- Purpose: Given any Push Chain address (UEA or native), return its origin `UniversalAccountId` and whether it corresponds to a UEA.
- Input: Uses example `address`.
- Returns:
  - `account`: `{ chainNamespace: string, chainId: string, owner: bytes }`
  - `isUEA`: `boolean`
- Note: For non‑EVM chains (e.g., Solana), `owner` is returned in hex. The script shows optional Base58 conversion using `bs58`.

### `getUEAForOrigin` function

- Purpose: Given a `UniversalAccountId`, compute the deterministic UEA address and check whether it is deployed.
- Input: Uses example `universalAccountId` object (can be customized in the script with `chainNamespace`, `chainId`, `owner` as bytes/hex).
- Returns:
  - `uea`: `address`
  - `isDeployed`: `boolean`

## Configuration

- The script defines:
  - `RPC_URL`: `https://evm.rpc-testnet-donut-node1.push.org/`
  - `FACTORY_ADDRESS`: `0x00000000000000000000000000000000000000eA` (UEAFactory)

## References

- Docs: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/#ueafactory--getueafororigin" target="_blank">Contract Helpers → UEAFactory</a>
