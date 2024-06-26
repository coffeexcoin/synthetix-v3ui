import { ethers } from 'ethers';
import { useQuery } from '@tanstack/react-query';
import { useCoreProxy } from '@snx-v3/useCoreProxy';
import { useNetwork } from '@snx-v3/useBlockchain';

export function useAccountCollateralUnlockDate({ accountId }: { accountId?: string }) {
  const { data: CoreProxy } = useCoreProxy();
  const { network } = useNetwork();

  return useQuery({
    queryKey: [`${network?.id}-${network?.preset}`, 'AccountCollateralUnlockDate', { accountId }],
    enabled: Boolean(CoreProxy && accountId),
    queryFn: async function () {
      if (!CoreProxy || !accountId) throw new Error('Core Proxy or account id is not defined');

      const [lastInteraction, accountTimeoutWithdraw] = await Promise.all([
        CoreProxy.getAccountLastInteraction(accountId),
        CoreProxy.getConfigUint(ethers.utils.formatBytes32String('accountTimeoutWithdraw')),
      ]);

      const collateralUnlock = lastInteraction.add(accountTimeoutWithdraw);

      return new Date(collateralUnlock.toNumber() * 1000);
    },
  });
}
