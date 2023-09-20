import { API } from './model.ts';
import { createContext } from 'react';

export const APIContext = createContext<API>({
  apis: {},
});
