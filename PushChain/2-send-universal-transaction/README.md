# Send Universal Transaction to Simple Counter Contract

This tutorial demonstrates how to send a Universal Transaction to interact with the Simple Counter smart contract using the PushChain SDK. The script shows how to call a smart contract deployed on Push Chain Donut Testnet from any chain using Universal Transactions.

## What we will do

- **Create a wallet**: Generate a random Ethereum wallet
- **Convert to Universal Signer**: Transform the wallet into a Universal Signer instance
- **Initialize Push Chain Client**: Set up the client to interact with Push Chain Donut Testnet
- **Send Universal Transaction**: Call the `increment()` function from a smart contract deployed on Push Chain Donut Testnet from Sepolia

## Simple Counter Contract

The script interacts with the Simple Counter contract deployed at:
`0x9F95857e43d25Bb9DaFc6376055eFf63bC0887C1`

This contract is a basic counter that:

- `increment()`: Increments the counter
- `reset()`: Resets the counter to zero
- `countPC()`: Returns the current counter value

## How it works

1. **Wallet Creation**: Creates a random wallet using `ethers.Wallet.createRandom()`
2. **Provider Setup**: Connects to Push Chain Donut Testnet RPC endpoint
3. **Universal Signer Conversion**: Uses `PushChain.utils.signer.toUniversal()` to create Universal Signer from the wallet
4. **Client Initialization**: Initializes Push Chain client with the Universal Signer
5. **Transaction Preparation**: Encodes the `increment()` function call using the Simple Counter ABI
6. **Transaction Execution**: Sends the transaction using `pushChainClient.universal.sendTransaction()`

## Key Components

### Contract ABI

The script includes a minimal ABI for the Simple Counter contract:

- `increment()`: Function to increment the counter
- `reset()`: Function to reset the counter
- `countPC()`: View function to read the counter value

### Transaction Parameters

We use the `encodeTxData` helper function to encode the transaction data. This function takes the ABI and function name, then generates the proper calldata for the contract interaction. The `sendTransaction` payload follows the same structure as a standard EVM transaction payload:

```javascript
const txParams = {
  to: SIMPLE_COUNTER_CONTRACT_ADDRESS,
  value: BigInt(0),
  data: PushChain.utils.helpers.encodeTxData({
    abi: SimpleCounterABI,
    functionName: 'increment',
  }),
};
```

## Example Transaction

This transaction showcases calling `increment()` on the Simple Counter deployed on Push Chain from a Solana wallet using Phantom:

- Explorer link: <a href="https://donut.push.network/tx/0x8fde3a025ce719c33cf9436763016f0e2ebb16563a6be44dc3b48c45a37878c6" target="_blank">https://donut.push.network/tx/0x8fde3a025ce719c33cf9436763016f0e2ebb16563a6be44dc3b48c45a37878c6</a>

## Important Notes

- **Funding required**: The generated wallet needs PC tokens to execute transactions
- **Get testnet tokens**: Visit <a href="https://faucet.push.org/" target="_blank">Push Chain Faucet</a> to get PC tokens for testing

## Universal Transaction Benefits

- **Cross-chain compatibility**: Send transactions from any L1 chain (EVM or non-EVM)
- **No bridging required**: Direct native transactions without wrapping or bridging
- **Simplified development**: No need for complex interoperability tooling

## References

- <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-simple-counter/" target="_blank">Official Simple Counter Tutorial</a>
- <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/" target="_blank">PushChain Documentation - Send Universal Transaction</a>
- <a href="https://www.npmjs.com/package/@pushchain/core" target="_blank">PushChain Core SDK</a>
