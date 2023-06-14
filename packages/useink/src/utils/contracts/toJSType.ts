import { AbiParam } from '../../core';

export type JSType = 'BN' | 'Bytes' | 'boolean' | 'null' | 'number' | 'string';

export type TypeDefType = string;
export type RegistryTypesMap = Record<TypeDefType, JSType>;

export const toJSType = (
  abiParam: AbiParam,
): [TypeDefType, JSType | undefined] => {
  const map: RegistryTypesMap = {
    AccountIndex: 'BN',
    Balance: 'BN',
    BalanceOf: 'BN',
    Compact: 'BN',
    Gas: 'BN',
    Index: 'BN',
    Nonce: 'BN',
    ParaId: 'BN',
    PropIndex: 'BN',
    ProposalIndex: 'BN',
    ReferendumIndex: 'BN',
    i64: 'BN',
    i128: 'BN',
    u32: 'BN',
    u64: 'BN',
    u128: 'BN',
    VoteIndex: 'BN',
    Moment: 'BN',
    VoteThreshold: 'BN',
    Vote: 'BN',
    BlockNumber: 'number',
    u8: 'number',
    u16: 'number',
    i8: 'number',
    i16: 'number',
    i32: 'number',
    bool: 'boolean',
    String: 'string',
    Text: 'string',
    Hash: 'string',
    H256: 'string',
    H512: 'string',
    H160: 'string',
    BlockHash: 'string',
    CodeHash: 'string',
    AccountId: 'string',
    AccountIdOf: 'string',
    Address: 'string',
    Call: 'string',
    CandidateReceipt: 'string',
    Digest: 'string',
    Header: 'string',
    KeyValue: 'string',
    LookupSource: 'string',
    MisbehaviorReport: 'string',
    Proposal: 'string',
    Signature: 'string',
    SessionKey: 'string',
    StorageKey: 'string',
    ValidatorId: 'string',
    Raw: 'string',
    Keys: 'string',
    Null: 'null',
    Bytes: 'Bytes',
    Extrinsic: 'Bytes',
  };

  return [abiParam.type.type, map[abiParam.type.type]];
};
