import { ContractPromise, Abi } from '@polkadot/api-contract';
import { AbiMessage, ContractOptions } from '@polkadot/api-contract/types';
import { DispatchError, ContractExecResult, Weight, StorageDeposit, Balance, ExtrinsicStatus, RuntimeDispatchInfo, Header, ContractExecResultResult } from '@polkadot/types/interfaces';
import { ChainId, IChain } from 'useink/chains';
import { ContractSubmittableResult } from '@polkadot/api-contract/base/contract';
import { ApiBase, SignerOptions } from '@polkadot/api/types';
import { DeriveBalancesAccount } from '@polkadot/api-derive/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { InjectedAccountWithMeta, InjectedExtension } from '@polkadot/extension-inject/types';
import { Codec } from '@polkadot/types-codec/types';
import { ISubmittableResult, Registry, RegistryError } from '@polkadot/types/types';
import * as React from 'react';
import React__default from 'react';

type Result<T, E = Error> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};

type AccountId = string;
interface TxInfo {
    gasRequired: Weight;
    gasConsumed: Weight;
    storageDeposit: StorageDeposit;
    partialFee: Balance;
}
interface ContractExecResultDecoded<T> extends Omit<TxInfo, 'partialFee'> {
    readonly decoded: T;
    readonly raw: ContractExecResult;
}
interface ContractTxExecResultDecoded<T> extends TxInfo {
    readonly decoded: T;
    readonly raw: ContractExecResult;
}
type DecodedResult<T> = Result<T, DispatchError | undefined>;
type DecodedContractResult<T> = DecodedResult<ContractExecResultDecoded<T>>;
type DecodedContractTxResult<T> = DecodedResult<ContractTxExecResultDecoded<T>>;

declare function useAbiMessage(contract: ContractPromise | undefined, message: string): AbiMessage | undefined;

type ArrayOneOrMore<T> = {
    0: T;
} & Array<T>;

type Status = 'None' | 'DryRun' | 'PendingSignature' | ExtrinsicStatus['type'] | 'Errored';

type NotificationType = Status | 'WalletConnected';

type CallSend<T> = (args?: unknown[], options?: ContractOptions, caller?: string) => Promise<DecodedContractResult<T> | undefined>;
interface UseCall<T> {
    send: CallSend<T>;
    isSubmitting: boolean;
}
declare enum CallError {
    ContractUndefined = "Contract is undefined",
    InvalidAbiMessage = "Invalid ABI Message",
    NoResponse = "No response"
}
interface UseCallResponse<T> extends UseCall<T> {
    result?: DecodedContractResult<T>;
}
declare function useCall<T>(contract: ContractPromise | undefined, message: string): UseCallResponse<T>;

type ContractAbi = string | Record<string, unknown> | Abi;
interface ChainContract<T extends ContractPromise = ContractPromise> {
    contract: T | undefined;
    chainId: ChainId;
}
declare function useContract<T extends ContractPromise = ContractPromise>(address: string, metadata: Record<string, unknown>, chainId?: ChainId): ChainContract<T> | undefined;

declare function useCallSubscription<T>(chainContract: ChainContract | undefined, message: string, args?: unknown[], options?: ContractOptions, caller?: string): Omit<UseCallResponse<T>, "send">;

type ContractEventPayload = {
    createdAt: number;
    name: string;
    args: unknown[];
};
type ContractEvent = {
    id: string;
} & ContractEventPayload;

declare const useContractEvents: (chainContract?: ChainContract) => ContractEvent[];

type ContractSubmittableResultCallback = (result: ContractSubmittableResult, api?: ApiBase<"promise">) => void;
type SignAndSend = (args?: unknown[], o?: ContractOptions, cb?: ContractSubmittableResultCallback) => void;
interface ContractTx<T> {
    signAndSend: SignAndSend;
    status: Status;
    result: ContractSubmittableResult | undefined;
    resetState: () => void;
}
declare function useContractTx<T>(contract: ContractPromise | undefined, message: string): ContractTx<T>;

type DryRunResult<T> = DecodedContractTxResult<T>;
type Send$1<T> = (args?: unknown[], o?: ContractOptions, signerOptions?: SignerOptions) => Promise<DryRunResult<T> | undefined>;
interface DryRun<T> {
    send: Send$1<T>;
    isSubmitting: boolean;
    result?: DryRunResult<T>;
    resolved: Boolean;
    resetState: () => void;
}
declare function useDryRun<T>(contract: ContractPromise | undefined, message: string): DryRun<T>;

type Send = (options?: ContractOptions, params?: unknown[], signerOptions?: Partial<SignerOptions>) => Promise<RuntimeDispatchInfo | undefined>;
interface PaymentInfoResult {
    isSubmitting: boolean;
    result?: RuntimeDispatchInfo;
    send: Send;
    resolved: boolean;
}
declare function useTxPaymentInfo(contract: ContractPromise | undefined, message: string): PaymentInfoResult;

interface WithAddress {
    address: string | undefined;
}
declare const useBalance: (account: WithAddress | undefined, chainId?: ChainId) => DeriveBalancesAccount | undefined;

interface BlockHeader {
    blockNumber: number | undefined;
    header: Header | undefined;
}

declare const useBlockHeader: (chainId?: ChainId) => BlockHeader | undefined;
declare const useBlockHeaders: () => Partial<Record<ChainId, BlockHeader>>;

interface IApiProvider {
    api: ApiPromise;
    provider: WsProvider;
}
type IApiProviders = Partial<Record<ChainId, IApiProvider>>;
interface API {
    apis?: IApiProviders;
}

declare const APIContext: React.Context<API>;

declare const APIProvider: React__default.FC<React__default.PropsWithChildren<any>>;

declare const useApis: () => API;
declare const useApi: (chainId?: ChainId) => IApiProvider | undefined;

declare const useChain: (chainId?: ChainId) => IChain | undefined;

declare const useChains: () => ArrayOneOrMore<IChain>;

type Config = {
    dappName?: string;
    chains: ArrayOneOrMore<IChain>;
    notifications?: {
        expiration?: number;
        checkInterval?: number;
    };
    contractEvents?: {
        expiration?: number;
        checkInterval?: number;
    };
    extension?: {
        skipAutoConnect?: boolean;
    };
};

declare const useConfig: () => Config;

declare enum ExtensionError {
    AccountFetchFailed = "AccountFetchFailed",
    AccountNotFound = "AccountNotFound",
    AccountsNotEnabled = "AccountsNotEnabled",
    ConnectionError = "ConnectionError",
    ExtensionsNotFound = "ExtensionsNotFound",
    SettingNewAccountFailed = "SettingNewAccountFailed"
}
type Extension = {
    account?: InjectedAccountWithMeta | undefined;
    accounts: InjectedAccountWithMeta[] | undefined;
    connect: () => void;
    disconnect: () => void;
    error?: ExtensionError;
    extension?: InjectedExtension | undefined;
    setAccount: (account: InjectedAccountWithMeta) => void;
};

declare const useExtension: () => Extension;

declare function useInterval(callback: () => void, delay: number | null): void;

declare function useIsMounted(): () => boolean;

type NotificationPayload = {
    createdAt: number;
    type: NotificationType;
    result?: Codec | ISubmittableResult;
    message: string;
};
type AddNotificationPayload = {
    notification: Omit<NotificationPayload, "createdAt">;
};
type RemoveNotificationPayload = {
    notificationId: string;
};
type Notification = {
    id: string;
} & NotificationPayload;
type Notifications = Notification[];

declare function useNotifications(): {
    notifications: Notifications;
    addNotification: (payload: AddNotificationPayload) => void;
    removeNotification: (payload: RemoveNotificationPayload) => void;
};

type InkConfig = {
    config?: Config;
};
declare const UseInkProvider: React__default.FC<React__default.PropsWithChildren<InkConfig>>;

type Response = {
    status: Status;
};
declare const isNone: (tx: {
    status: Status;
}) => boolean;
declare const isDryRun: (tx: {
    status: Status;
}) => boolean;
declare const isPendingSignature: (tx: {
    status: Status;
}) => boolean;
declare const isBroadcasting: (tx: {
    status: Status;
}) => boolean;
declare const isInBlock: (tx: {
    status: Status;
}) => boolean;
declare const hasAny: (tx: {
    status: Status;
}, ...statuses: Status[]) => boolean;
declare const isFinalized: (tx: {
    status: Status;
}) => boolean;
declare const isErrored: (tx: {
    status: Status;
}) => boolean;
declare const shouldDisable: (tx: {
    status: Status;
}) => boolean;
declare const shouldDisableStrict: (tx: {
    status: Status;
}) => boolean;

declare function call<T>(contract: ContractPromise, abiMessage: AbiMessage, caller: AccountId, args?: unknown[], options?: ContractOptions): Promise<DecodedContractResult<T> | undefined>;

declare function decodeContractExecResult<T>(result: ContractExecResult["result"], message: AbiMessage, registry: Registry): DecodedResult<T>;

interface DecodedErrorResult {
    message?: string;
    registryError?: RegistryError;
}
type RegistryErrorMethod = string;
declare const decodeError: ({ error }: {
    error: DispatchError | undefined;
}, { api }: {
    api: ApiBase<'promise'>;
}, moduleMessages?: Record<RegistryErrorMethod, string>) => DecodedErrorResult;

declare const toContractAbiMessage: (contract: ContractPromise, message: string) => Result<AbiMessage, string>;

declare const toRegistryErrorDecoded: (registry: Registry, result: ContractExecResultResult) => RegistryError | undefined;

type CreatedItem = {
    createdAt: number;
};
declare function getExpiredItem<T extends CreatedItem>(items: T[], expirationPeriod?: number): T[];

declare const stringNumberToBN: (valWithCommas: string) => BigInt;

declare const pseudoRandomId: (t?: number) => string;

export { API, APIContext, APIProvider, BlockHeader, CallError, CallSend, ChainContract, ContractAbi, ContractSubmittableResultCallback, ContractTx, CreatedItem, DecodedErrorResult, DryRunResult, Extension, IApiProvider, IApiProviders, InkConfig, Response, Send$1 as Send, SignAndSend, UseCall, UseCallResponse, UseInkProvider, WithAddress, call, decodeContractExecResult, decodeError, getExpiredItem, hasAny, isBroadcasting, isDryRun, isErrored, isFinalized, isInBlock, isNone, isPendingSignature, pseudoRandomId, shouldDisable, shouldDisableStrict, stringNumberToBN, toContractAbiMessage, toRegistryErrorDecoded, useAbiMessage, useApi, useApis, useBalance, useBlockHeader, useBlockHeaders, useCall, useCallSubscription, useChain, useChains, useConfig, useContract, useContractEvents, useContractTx, useDryRun, useExtension, useInterval, useIsMounted, useNotifications, useTxPaymentInfo };
