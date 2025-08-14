import { createPublicClient, http } from 'https://cdn.jsdelivr.net/npm/viem@2.10.10/+esm';

async function main() {
  const client = createPublicClient({
    transport: http('https://evm.rpc-testnet-donut-node1.push.org/'),
  });

  const blockNumber = await client.getBlockNumber();
  console.log('Current Block (viem):', blockNumber);
}

main().catch((e) => console.error(e));
