export interface IRegistryInfo {
  registry: {
    chainDecimals: (number | undefined)[];
    chainTokens: (string | undefined)[];
  };
}

export const chainTokenSymbol = (api: IRegistryInfo): string | undefined =>
  api.registry.chainTokens[0];

export const chainDecimals = (api: IRegistryInfo): number | undefined =>
  api.registry.chainDecimals[0];
