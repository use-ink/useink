import { useContext } from 'deps/preact/hooks.ts';
import { API, APIContext } from 'core/providers/api/mod.ts';

export const useApi = () => useContext<API>(APIContext);
