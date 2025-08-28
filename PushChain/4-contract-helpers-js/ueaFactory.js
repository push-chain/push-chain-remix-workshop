import { ethers } from 'ethers';
import { bs58 } from 'bs58';

// ——— CONFIG ———
const RPC_URL = 'https://evm.rpc-testnet-donut-node1.push.org/';
const FACTORY_ADDRESS = '0x00000000000000000000000000000000000000eA';

// Combined ABI for both functions
const IUEAFactoryABI = [
  // returns (UniversalAccountId account, bool isUEA)
  'function getOriginForUEA(address addr) view returns (tuple(string chainNamespace, string chainId, bytes owner) account, bool isUEA)',
  'function getUEAForOrigin(tuple(string chainNamespace, string chainId, bytes owner) _id) view returns (address uea, bool isDeployed)',
];

async function getOriginForUEA(factory, address) {
  console.log('\n=== getOriginForUEA ===');
  console.log('Calling getOriginForUEA on PushChain');
  const originResult = await factory.getOriginForUEA(address);
  console.log('Note: The address returned are always in hex format even for non-EVM chains.');
  console.log('Result -', JSON.stringify(originResult));

  // Optional: convert non-evm chain address according to their standards
  // Note: If the origin is Solana (chainNamespace === "solana"), the owner address
  // will be in hex format and needs to be converted to base58 for readable format
  if (originResult[0][0] === 'solana') {
    // Convert hex-encoded address to base58 address format
    const bytesAddress = ethers.getBytes(originResult[0][2]);
    const base58Address = bs58.encode(bytesAddress);
    console.log('Solana (Base58) Address -', base58Address);
  }

  return originResult;
}

async function getUEAForOrigin(factory, universalAccountId) {
  console.log('\n=== getUEAForOrigin ===');
  console.log('Calling getUEAForOrigin on PushChain');
  const originResult = await factory.getUEAForOrigin(universalAccountId);
  console.log('Result -', JSON.stringify(originResult));

  return originResult;
}

async function main() {
  // 1) Set up provider and factory contract
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const factory = new ethers.Contract(FACTORY_ADDRESS, IUEAFactoryABI, provider);

  // 2) Example 1: getOriginForUEA
  // Insert any address (UEA or Native Addresses) to check its origin details
  const address = '0x61979c38a51c4dB3ffCB25D11061DCDB7a8c6504';
  await getOriginForUEA(factory, address);

  // 3) Example 2: getUEAForOrigin
  // Create UniversalAccountId struct
  const universalAccountId = {
    chainNamespace: 'eip155', // EVM chain
    chainId: '11155111', // Sepolia testnet (more likely to be registered on Push testnet)
    owner: '0xa96CaA79eb2312DbEb0B8E93c1Ce84C98b67bF11', // owner address in bytes format
  };
  await getUEAForOrigin(factory, universalAccountId);
}

main().catch(console.error);
