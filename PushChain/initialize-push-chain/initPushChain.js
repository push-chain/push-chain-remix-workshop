// Import from ESM CDNs so it runs in Remix without npm install
import { PushChain } from 'https://esm.sh/@pushchain/core@latest';
import { ethers } from 'https://esm.sh/ethers@6';

async function main() {
  console.log('Creating Universal Signer - Ethers V6');

  // Create random wallet
  const wallet = ethers.Wallet.createRandom();

  // Set up provider connected to Ethereum Sepolia Testnet
  const provider = new ethers.JsonRpcProvider('https://gateway.tenderly.co/public/sepolia');
  const signer = wallet.connect(provider);

  // Convert ethers signer to Universal Signer
  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  console.log('🔑 Got universal signer');

  // Initialize Push Chain SDK
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });
  console.log('🔑 Got push chain client');
  console.log(JSON.stringify(pushChainClient));
}

await main().catch(console.error);
