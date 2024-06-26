import { useQuery } from '@tanstack/react-query';
import { CouncilSlugs } from '../utils/councils';
import { getCouncilContract } from '../utils/contracts';
import { useSigner } from '@snx-v3/useBlockchain';
import { motherShipProvider } from '../utils/providers';

export function useGetElectionSettings(council: CouncilSlugs) {
  const signer = useSigner();
  return useQuery({
    queryKey: ['useGetElectionSettings', council],
    queryFn: async () => {
      return (await getCouncilContract(council)
        .connect(signer ? signer : motherShipProvider)
        .getElectionSettings()) as Promise<{
        epochSeatCount: number;
        minimumActiveMembers: number;
        epochDuration: number;
        nominationPeriodDuration: number;
        votingPeriodDuration: number;
        maxDateAdjustmentTolerance: number;
      }>;
    },
    staleTime: 900000,
  });
}
