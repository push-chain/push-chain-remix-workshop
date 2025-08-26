import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_PUSH = 'https://ethereum-sepolia-rpc.publicnode.com';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log('🚀 Initializing Universal Transaction Example');

  // Define Simple Counter ABI, taking minimal ABI for the demo
  const SimpleCounterABI = [
    {
      inputs: [],
      name: 'increment',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reset',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'countPC',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ];

  // Contract address for the Simple Counter
  const SIMPLE_COUNTER_CONTRACT_ADDRESS = '0x9F95857e43d25Bb9DaFc6376055eFf63bC0887C1';

  // 1) Create a wallet (in production, you'd use your own wallet)
  const wallet = ethers.Wallet.createRandom();
  console.log('📝 Created wallet:', wallet.address);

  // 2) Set up provider and connect wallet
  const provider = new ethers.JsonRpcProvider(RPC_PUSH);
  const signer = wallet.connect(provider);

  // 3) Convert to Universal Signer
  console.log('🔄 Converting to Universal Signer...');
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);

  // 4) Initialize Push Chain Client
  console.log('🔗 Initializing Push Chain Client...');
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET,
  });

  // 5) Prepare transaction parameters
  const txParams = {
    to: SIMPLE_COUNTER_CONTRACT_ADDRESS,
    value: BigInt(0),
    data: PushChain.utils.helpers.encodeTxData({
      abi: SimpleCounterABI,
      functionName: 'increment',
    }),
  };

  // wait for user to send funds first
  await rl.question(':::prompt:::Please send funds to: ' + wallet.address + ' on Sepolia to continue.');

  // 6) Send universal transaction
  console.log('📤 Interacting with Simple Counter contract:', SIMPLE_COUNTER_CONTRACT_ADDRESS);

  try {
    // Note: This would fail in playground without funds
    // In production, ensure wallet has funds
    const txResponse = await pushChainClient.universal.sendTransaction(txParams);
    console.log('✅ Transaction sent! Tx:', txResponse);
    console.log('🔍 View the transaction on PushScan: ' + pushChainClient.explorer.getTransactionUrl(txResponse.hash));
  } catch (error) {
    console.error('❌ Transaction failed:', error);
    // In playground, this will fail without funds
    console.log('Note: In playground, this might fail without funds. Ensure your wallet has PC tokens.');
  }
}

main().catch(console.error);
