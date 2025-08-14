import { ethers } from 'ethers';

// ——— CONFIG ———
const RPC_URL = 'https://evm.rpc-testnet-donut-node1.push.org/';
const FACTORY_ADDRESS = '0x00000000000000000000000000000000000000eA';

// Corrected ABI
const IUEAFactoryABI = [
  'function getUEAForOrigin(tuple(string chainNamespace, string chainId, bytes owner) _id) view returns (address uea, bool isDeployed)',
];

async function main() {
  // 1) set up
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const factory = new ethers.Contract(FACTORY_ADDRESS, IUEAFactoryABI, provider);

  // 2) create UniversalAccountId struct
  const universalAccountId = {
    chainNamespace: 'eip155', // EVM chain
    chainId: '11155111', // Sepolia testnet (more likely to be registered on Push testnet)
    owner: '0xa96CaA79eb2312DbEb0B8E93c1Ce84C98b67bF11', // owner address in bytes format
  };

  // 3) call getUEAForOrigin
  console.log('Calling getUEAForOrigin on PushChain');
  const originResult = await factory.getUEAForOrigin(universalAccountId);
  console.log('Result -', JSON.stringify(originResult));
}

main().catch(console.error);
