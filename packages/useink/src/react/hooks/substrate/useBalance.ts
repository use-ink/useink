<<<<<<<< HEAD:packages/useink/src/react/hooks/substrate/useBalance.ts
import { ChainId } from '../../../chains/index';
import { DeriveBalancesAccount, WithAddress } from '../../../core/index';
import { getBalance } from '../../../core/index';
import { useChain } from '../index';
import { useApi } from '../substrate/useApi.ts';
import { useBlockHeader } from './useBlockHeader.ts';
import { useEffect, useState } from 'react';
========
import { useEffect, useState } from 'react';
import { useApi } from '../substrate/useApi.ts';
import { useBlockHeader } from './useBlockHeader.ts';
import { ChainId } from '../../../chains/mod.ts';
import { useChain } from '../mod.ts';
import { DeriveBalancesAccount, WithAddress } from '../../../core/mod.ts';
import { getBalance } from '../../../core/mod.ts';
>>>>>>>> main:react/hooks/substrate/useBalance.ts

export const useBalance = (
  account: WithAddress | undefined,
  chainId?: ChainId,
): DeriveBalancesAccount | undefined => {
  const [balance, setBalance] = useState<DeriveBalancesAccount>();
  const { blockNumber } = useBlockHeader(chainId) || {};
  const chainConfig = useChain(chainId);
  const chain = useApi(chainConfig?.id);

  useEffect(() => {
    if (!chain?.api || !account || !account.address) return;
<<<<<<<< HEAD:packages/useink/src/react/hooks/substrate/useBalance.ts
    getBalance(chain.api, account).then(setBalance).catch(console.error);
========
    getBalance(chain.api, account).then(setBalance).catch(
      console.error,
    );
>>>>>>>> main:react/hooks/substrate/useBalance.ts
  }, [blockNumber, account]);

  return balance;
};
