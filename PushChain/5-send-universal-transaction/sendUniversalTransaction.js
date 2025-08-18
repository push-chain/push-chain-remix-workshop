import { PushChain } from '@pushchain/core';
import { ethers } from 'ethers';
import * as readline from 'node:readline/promises';

const RPC_PUSH = 'https://evm.rpc-testnet-donut-node1.push.org/';
const RECIPIENT = '0x0000000000000000000000000000000000042101';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log('🚀 Initializing Universal Transaction Example');

  // Define Universal Counter ABI, taking minimal ABI for the demo
  const UniversalCounterABI = [
    {
      inputs: [],
      name: 'increment',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'countEth',
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
    {
      inputs: [],
      name: 'countSol',
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

  // Contract address for the Universal Counter
  const UNIVERSAL_COUNTER_CONTRACT_ADDRESS = '0x07E7Ca060A4b5BcDa61A6B701305ef0Ee29E1A3e';

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
    to: UNIVERSAL_COUNTER_CONTRACT_ADDRESS,
    value: BigInt(0),
    data: PushChain.utils.helpers.encodeTxData({
      abi: UniversalCounterABI,
      functionName: 'increment',
    }),
  };

  // wait for user to send funds first
  await rl.question(':::prompt:::Please send funds to: ' + wallet.address + ' on Push Testnet Donut to continue.');

  // 6) Send universal transaction
  console.log('📤 Sending transaction to:', RECIPIENT);

  try {
    // Note: This would fail in playground without funds
    // In production, ensure wallet has funds
    const txResponse = await pushChainClient.universal.sendTransaction(txParams);
    console.log('✅ Transaction sent! Tx:', txResponse);
  } catch (error) {
    console.error('❌ Transaction failed:', error);
    // In playground, this will fail without funds
    console.log('Note: In playground, this might fail without funds. Ensure your wallet has PC tokens.');
  }
}

main().catch(console.error);
