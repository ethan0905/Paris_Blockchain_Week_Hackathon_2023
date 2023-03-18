import { EthNetworkConfiguration, Magic } from 'magic-sdk';
import { Networks } from '../utils/networks';

const formattedNetwork = (): EthNetworkConfiguration => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Optimism:
      return {
        rpcUrl: process.env.REACT_APP_OPTIMISM_RPC_URL as string,
        chainId: 420,
      };
    case Networks.Polygon:
      return {
        rpcUrl: process.env.REACT_APP_POLYGON_RPC_URL as string,
        chainId: 80001,
      };
    default:
      return {
        rpcUrl: process.env.REACT_APP_ETHEREUM_RPC_URL as string,
        chainId: 5,
      };
  }
};

export const magic = new Magic("pk_live_3EAC7F93725A4C30" as string, {
  network: formattedNetwork(),
});
