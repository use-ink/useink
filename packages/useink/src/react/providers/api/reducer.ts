<<<<<<<< HEAD:packages/useink/src/react/providers/api/reducer.ts
import { ChainId } from '../../../chains/index';
========
import { ChainId } from '../../../chains/mod.ts';
>>>>>>>> main:react/providers/api/reducer.ts
import { IApiProvider, IApiProviders } from './model.ts';

interface AddApiProvider {
  type: 'ADD_API_PROVIDER';
  chainId: ChainId;
  apiProvider: IApiProvider;
}

type Action = AddApiProvider;

export function apiProvidersReducer(
  state: IApiProviders,
  action: Action,
): IApiProviders {
  switch (action.type) {
    case 'ADD_API_PROVIDER':
      return {
        ...state,
        [action.chainId]: action.apiProvider,
      };
  }
}
