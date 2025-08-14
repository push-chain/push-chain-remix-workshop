import { ethers } from 'ethers';
import { bs58 } from 'bs58';

// ——— CONFIG ———
const RPC_URL = 'https://evm.rpc-testnet-donut-node1.push.org/';
const FACTORY_ADDRESS = '0x00000000000000000000000000000000000000eA';

// Corrected ABI
const IUEAFactoryABI = [
  // returns (UniversalAccountId account, bool isUEA)
  'function getOriginForUEA(address addr) view returns (tuple(string chainNamespace, string chainId, bytes owner) account, bool isUEA)',
];

async function main() {
  // 1) set up
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const factory = new ethers.Contract(FACTORY_ADDRESS, IUEAFactoryABI, provider);

  // 2) <insert any address ( UEA or Native Addresses) to check its origin details >
  const someAddress = '0x5ef53CF4B369E507C34C3eF5B24791574dCd415E';

  // 3) call getOriginForUEA
  console.log('Calling getOriginForUEA on PushChain');
  const originResult = await factory.getOriginForUEA(someAddress);
  console.log('Note: The address returned are always in hex format even for non-EVM chains.');
  console.log('Result -', JSON.stringify(originResult));

  // 4) optional: convert non-evm chain address according to their standards
  if (originResult[0][0] === 'solana') {
    // Convert hex-encoded address to base58 address format
    const bytesAddress = ethers.getBytes(originResult[0][2]);
    const base58Address = bs58.encode(bytesAddress);
    console.log('Solana (Base58) Address -', base58Address);
  }

  // Note: If the origin is Solana (chainNamespace === "solana"), the owner address
  // will be in hex format and needs to be converted to base58 for readable format
}

main().catch(console.error);
