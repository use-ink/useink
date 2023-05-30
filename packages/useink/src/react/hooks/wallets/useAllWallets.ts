import { useMemo } from "react";
import { useWallet } from "../index";
import { Wallet } from "../../providers/wallet/index";

export const useAllWallets = (): Wallet[] => {
  const { getWallets } = useWallet();
  return useMemo(() => getWallets(), []);
};
