import { AbiMessage, ContractPromise, Result } from '../types/index';

export const toContractAbiMessage = (
  contract: ContractPromise,
  message: string,
): Result<AbiMessage, string> => {
  const value = contract.abi.messages.find((m) => m.method === message);

  if (!value) {
    const messages = contract?.abi.messages.map((m) => m.method).join(', ');

    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);

    return { ok: false, error };
  }

  return { ok: true, value };
};
