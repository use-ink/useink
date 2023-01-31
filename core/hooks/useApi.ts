import { API, APIContext } from '../providers/api/mod.ts';
import { useContext } from 'react';

export const useApi = (): API => useContext<API>(APIContext);
