import { PushChain } from 'https://cdn.jsdelivr.net/npm/@pushchain/core@1.1.33/+esm';
import { ethers } from 'ethers';

async function main() {
  const wallet = ethers.Wallet.createRandom();
  const provider = new ethers.JsonRpcProvider('https://gateway.tenderly.co/public/sepolia');
  const signer = wallet.connect(provider);

  const universalSigner = await PushChain.utils.signer.toUniversal(signer);
  const pushChainClient = await PushChain.initialize(universalSigner, {
    network: PushChain.CONSTANTS.PUSH_NETWORK.TESTNET_DONUT,
  });

  const erc20Abi = ['function transfer(address to, uint256 amount) returns (bool)'];

  const data = PushChain.utils.helpers.encodeTxData({
    abi: erc20Abi,
    functionName: 'transfer',
    args: ['0x000000000000000000000000000000000000dEaD', PushChain.utils.helpers.parseUnits('1', 18)],
  });

  const tx = await pushChainClient.universal.sendTransaction({
    to: '0x0000000000000000000000000000000000000001', // Replace with real ERC-20 on Push
    value: 0n,
    data,
    progressHook: (p) => console.log(`[${p.level}] ${p.title} — ${p.message}`),
  });

  console.log('Contract call TX:', tx.hash);
}

main().catch((e) => console.error(e));
