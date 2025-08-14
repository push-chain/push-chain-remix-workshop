# UEA Factory Demo (Calling getOriginForUEA and getUEAForOrigin from Solidity)

In this step, we provide a minimal Solidity contract `UEAFactoryDemo.sol` that demonstrates how to call the Push Chain `UEAFactory.getOriginForUEA()` and `UEAFactory.getUEAForOrigin()` functions from on-chain code.

## What the contract does (`UEAFactoryDemo.sol`)

- Exposes a function named `discoverOrigin()` that calls `getOriginForUEA(msg.sender)` on the `UEAFactory` at `0x00000000000000000000000000000000000000eA` and returns the origin `UniversalAccountId` plus a boolean indicating whether the caller (`msg.sender`) is a Universal Executor Account (UEA).
- Exposes a function named `getUEAForOrigin(UniversalAccountId)` that calls `getUEAForOrigin(account)` on the same `UEAFactory` and returns the deterministic `uea` address and `isDeployed` status for that Universal Account.

## Notes

- The `UEAFactory` address is the predeploy used by Push Chain.
- If you want to compare with a more feature-rich example (including state changes), check the linked Universal Counter tutorial.
- `getUEAForOrigin` can return a deterministic UEA address even if the account is not yet deployed (`isDeployed == false`).

## References

- Tutorial example: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter/" target="_blank">Universal Counter (contract calling getOriginForUEA)</a>
- Concepts: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/important-concepts/#account-types-on-push-chain" target="_blank">Account types on Push Chain</a>
- Contract Helpers: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/#ueafactory--getoriginforuea" target="_blank">UEAFactory → getOriginForUEA</a>
- Contract Helpers: <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/contract-helpers/#ueafactory--getueafororigin" target="_blank">UEAFactory → getUEAForOrigin</a>
