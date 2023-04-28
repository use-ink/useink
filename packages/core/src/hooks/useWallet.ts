import { useContext } from "react";
import { WalletContext, WalletState } from "../providers/wallet";

export type { WalletState } from "../providers/wallet";

export const useWallet: () => WalletState = () =>
  useContext<WalletState>(WalletContext);
