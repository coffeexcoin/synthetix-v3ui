import { ethers } from 'ethers';
import { importCoreProxy } from './importCoreProxy';
import { getCollateralConfig } from './getCollateralConfig';

export async function borrowUsd({ privateKey, accountId, symbol, amount, poolId }) {
  const CoreProxy = await importCoreProxy();
  const config = await getCollateralConfig(symbol);
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
  const wallet = new ethers.Wallet(privateKey, provider);
  console.log('borrowUsd', { address: wallet.address, accountId, symbol, amount, poolId });

  const coreProxy = new ethers.Contract(CoreProxy.address, CoreProxy.abi, wallet);

  const tx = await coreProxy.mintUsd(
    ethers.BigNumber.from(accountId),
    ethers.BigNumber.from(poolId),
    config.tokenAddress,
    ethers.utils.parseEther(`${amount}`),
    { gasLimit: 10_000_000 }
  );
  await tx.wait();
  return amount;
}
