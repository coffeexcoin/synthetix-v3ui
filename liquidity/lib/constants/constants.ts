export const GWEI_DECIMALS = 9;
export const GAS_LIMIT_MULTIPLIER = 1.5;

export const DEFAULT_QUERY_REFRESH_INTERVAL = 600_000; // 10min
export const DEFAULT_QUERY_STALE_TIME = 300_000; // 5min

export const INFURA_KEY = process.env.INFURA_KEY || '8678fe160b1f4d45ad3f3f71502fc57b';
export const ONBOARD_KEY = 'sec_jykTuCK0ZuqXWf3wNYqizxs2';

export const getSubgraphUrl = (networkName = 'optimism-mainnet') => {
  switch (networkName) {
    case 'arbitrum':
      return `https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-arbitrum-mainnet/version/v1/api`;
    case 'base-sepolia':
      return 'https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-base-sepolia-andromeda/version/v1.0.1/api';
    case 'base':
      return 'https://subgraph.satsuma-prod.com/ce5e03f52f3b/synthetix/synthetix-base-mainnet-andromeda/version/v1.0.1/api';
    default:
      return `https://api.thegraph.com/subgraphs/name/snx-v3/${networkName}`;
  }
};

export const SESSION_STORAGE_KEYS = {
  TERMS_CONDITIONS_ACCEPTED: 'TERMS_CONDITIONS_ACCEPTED',
};

export const offchainMainnetEndpoint =
  process.env.PYTH_MAINNET_ENDPOINT || 'https://synthetixab.rpc.p2p.world/';

export const offchainTestnetEndpoint =
  process.env.PYTH_TESTNET_ENDPOINT || 'https://synthetixab.rpc.p2p.world/';
