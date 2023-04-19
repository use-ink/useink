type ChainId = "AlephZero" | "AlephZeroTestnet" | "Astar" | "ContractsRococo" | "Development" | "Khala" | "Phala" | "PhalaTestnet" | "Rococo" | "Shibuya" | "Shiden";
interface IChain {
    id: ChainId;
    name: string;
    ss58Prefix: number;
    rpcUrls: string[];
    explorerUrls: string[];
    testnet?: boolean;
    coingeckoId?: string;
    token: {
        symbol: string;
    };
}

declare const AlephZero: IChain;
declare const AlephZeroTestnet: IChain;

declare const Astar: IChain;
declare const Shiden: IChain;
declare const Shibuya: IChain;

declare const ContractsRococo: IChain;

declare const Development: IChain;

declare const Phala: IChain;
declare const Khala: IChain;
declare const PhalaTestnet: IChain;

declare const Rococo: IChain;

declare const Chains: {
    AlephZero: IChain;
    AlephZeroTestnet: IChain;
    Astar: IChain;
    ContractsRococo: IChain;
    Development: IChain;
    Khala: IChain;
    Phala: IChain;
    PhalaTestnet: IChain;
    Rococo: IChain;
    Shibuya: IChain;
    Shiden: IChain;
};

declare const AllChains: IChain[];

export { AlephZero, AlephZeroTestnet, AllChains, Astar, ChainId, Chains, ContractsRococo, Development, IChain, Khala, Phala, PhalaTestnet, Rococo, Shibuya, Shiden };
