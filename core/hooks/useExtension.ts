import { useContext } from 'react';
import { Extension, ExtensionContext } from '../providers/extension/mod.ts';

export type { Extension } from '../providers/extension/mod.ts';

export const useExtension: () => Extension = () =>
  useContext<Extension>(ExtensionContext);
