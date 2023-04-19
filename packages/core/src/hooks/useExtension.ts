import { useContext } from "react";
import { Extension, ExtensionContext } from "../providers/extension";

export type { Extension } from "../providers/extension";

export const useExtension: () => Extension = () =>
  useContext<Extension>(ExtensionContext);
