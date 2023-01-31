import { createContext } from 'react';
import { API } from './model.ts';

export const APIContext = createContext<API>({
  api: undefined,
  provider: undefined,
});
