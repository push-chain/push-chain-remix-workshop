import { ethers } from 'ethers';

async function main() {
  const provider = new ethers.JsonRpcProvider('https://evm.rpc-testnet-donut-node1.push.org/');
  const blockNumber = await provider.getBlockNumber();
  console.log('Current Block (ethers):', blockNumber);
}

main().catch((e) => console.error(e));
