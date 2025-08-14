import { PushChain } from 'https://cdn.jsdelivr.net/npm/@pushchain/core@1.1.33/+esm';
import { ethers } from 'ethers';

async function main() {
  // Demo signer and origin provider (Sepolia)
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://gateway.tenderly.co/public/sepolia');
  const signer = wallet.connect(provider);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });

  const value = PushChain.utils.helpers.parseUnits('0.01', 18); // 0.01 PC

  const receipt = await pushChainClient.universal.sendTransaction({
    to: '0x000000000000000000000000000000000000dEaD',
    value,
    progressHook: (p) => console.log(`[${p.level}] ${p.title} — ${p.message}`),
  });

  console.log('TX sent on Push Chain:', receipt.hash);
}

main().catch((e) => console.error(e));
