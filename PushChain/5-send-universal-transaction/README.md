# Send Universal Transaction to Universal Counter

This tutorial demonstrates how to send a Universal Transaction to interact with the Universal Counter smart contract using the PushChain SDK. The script shows how to call a smart contract deployed on Push Chain Donut Testnet from any chain using Universal Transactions.

## What we will do

- **Create a wallet**: Generate a random Ethereum wallet
- **Convert to Universal Signer**: Transform the wallet into a Universal Signer from Sepoliathat can work across chains
- **Initialize Push Chain Client**: Set up the client to interact with Push Chain Donut Testnet
- **Send Universal Transaction**: Call the `increment()` function from a smart contract deployed on Push Chain Donut Testnet from Sepolia

## Universal Counter Contract

The script interacts with the Universal Counter contract deployed at:
`0x07E7Ca060A4b5BcDa61A6B701305ef0Ee29E1A3e`

This contract maintains separate counters for different origin chains:

- `countEth`: Counter for Ethereum users
- `countSol`: Counter for Solana users  
- `countPC`: Counter for native Push Chain users

## How it works

1. **Wallet Creation**: Creates a random wallet using `ethers.Wallet.createRandom()`
2. **Provider Setup**: Connects to Push Chain Donut Testnet RPC endpoint
3. **Universal Signer Conversion**: Uses `PushChain.utils.signer.toUniversal()` to create Universal Signer from the wallet
4. **Client Initialization**: Initializes Push Chain client with the Universal Signer
5. **Transaction Preparation**: Encodes the `increment()` function call using the contract ABI
6. **Transaction Execution**: Sends the transaction using `pushChainClient.universal.sendTransaction()`

## Key Components

### Contract ABI

The script includes a minimal ABI for the Universal Counter contract:

- `increment()`: Function to increment the appropriate counter
- `countEth()`, `countSol()`, `countPC()`: View functions to read counter values

### Transaction Parameters

```javascript
const txParams = {
  to: UNIVERSAL_COUNTER_CONTRACT_ADDRESS,
  value: BigInt(0),
  data: PushChain.utils.helpers.encodeTxData({
    abi: UniversalCounterABI,
    functionName: 'increment',
  }),
};
```

## Important Notes

- **Funding required**: The generated wallet needs PC tokens to execute transactions
- **Get testnet tokens**: Visit [Push Chain Faucet](https://faucet.push.org/) to get PC tokens for testing

## Universal Transaction Benefits

- **Cross-chain compatibility**: Send transactions from any L1 chain (EVM or non-EVM)
- **No bridging required**: Direct native transactions without wrapping or bridging
- **Simplified development**: No need for complex interoperability tooling

## References

- <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/tutorials/tutorial-universal-counter/" target="_blank">Official Universal Counter Tutorial</a>
- <a href="https://pushchain.github.io/push-chain-website/pr-preview/pr-1067/docs/chain/build/send-universal-transaction/" target="_blank">PushChain Documentation - Send Universal Transaction</a>
- <a href="https://www.npmjs.com/package/@pushchain/core" target="_blank">PushChain Core SDK</a>
