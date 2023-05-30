import { useContext } from "react";
import { WalletContext, WalletState } from "../../providers/wallet/index";

export type { WalletState } from "../../providers/wallet/index";

export const useWallet: () => WalletState = () =>
  useContext<WalletState>(WalletContext);
