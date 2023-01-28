import { createContext } from 'deps/preact.ts';
import { API } from './model.ts';

export const APIContext = createContext<API>({
  api: undefined,
  provider: undefined,
});
